import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userDataReducer } from './slices/userDataSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['userData'], // Only persist user data
};

const persistedUserDataReducer = persistReducer(persistConfig, userDataReducer);

const rootReducer = combineReducers({
	userData: persistedUserDataReducer,
});

export const appStore = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
			},
		}),
});

export const persistedAppStore = persistStore(appStore);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
