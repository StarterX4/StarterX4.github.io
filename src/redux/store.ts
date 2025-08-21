import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userDataReducer } from './slices/userDataSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
};
const persistedUserDataReducer = persistReducer(persistConfig, userDataReducer);

const combinedReducers = combineReducers({
    userDataReducer: persistedUserDataReducer,
});

export const appStore = configureStore({
    reducer: combinedReducers,
});

export const persistedAppStore = persistStore(appStore);

export type AppState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
