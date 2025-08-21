export interface AppError {
	message: string;
	code: string | undefined;
	details: unknown | undefined;
	timestamp: Date;
}

export class AppErrorHandler {
	static createError(message: string, code?: string, details?: unknown): AppError {
		return {
			message,
			code,
			details,
			timestamp: new Date(),
		};
	}

	static logError(error: AppError | Error): void {
		// In production, you might want to send this to an error tracking service
		// like Sentry, LogRocket, etc.
		console.error('Application Error:', error);
	}

	static handleAsyncError<T>(promise: Promise<T>): Promise<[T | null, AppError | null]> {
		return promise
			.then((data) => [data, null] as [T, null])
			.catch((error) => {
				const appError = this.createError(
					error.message || 'An unexpected error occurred',
					error.code,
					error,
				);
				this.logError(appError);
				return [null, appError] as [null, AppError];
			});
	}
}
