interface ButtonProps {
	children?: any;
	onClick?: (e: Event) => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	onFocus?: () => void;
	onBlur?: () => void;
	className?: string;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
	children,
	onClick,
	onMouseEnter,
	onMouseLeave,
	onFocus,
	onBlur,
	className = '',
	disabled = false,
	type = 'button',
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={`custom-button ${className}`}
			onClick={onClick as any}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onFocus={onFocus}
			onBlur={onBlur}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

