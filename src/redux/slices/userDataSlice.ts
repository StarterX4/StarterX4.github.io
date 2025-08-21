import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SteamUserDetails {
	personaname: string;
	profileurl: string;
	avatar: string;
	avatarmedium: string;
	avatarfull: string;
	realname: string;
	loccountrycode: string;
	steamid: string;
}

export interface GamesInfo {
	ownsLeft4Dead2: boolean;
}

export interface UserDataState {
	userID: string | null;
	isAdmin: boolean;
	userData: SteamUserDetails | null;
	gamesData: GamesInfo | null;
}

const initialState: UserDataState = {
	userID: null,
	isAdmin: false,
	userData: null,
	gamesData: null,
};

const userDataSlice = createSlice({
	name: 'userData',
	initialState,
	reducers: {
		setIsAdmin: (state, action: PayloadAction<boolean>) => {
			state.isAdmin = action.payload;
		},
		setUserID: (state, action: PayloadAction<string | null>) => {
			state.userID = action.payload;
			if (!action.payload) {
				state.userData = null;
				state.isAdmin = false;
				state.gamesData = null;
			}
		},
		setUserData: (state, action: PayloadAction<SteamUserDetails>) => {
			state.userData = action.payload;
		},
		setGamesData: (state, action: PayloadAction<GamesInfo>) => {
			state.gamesData = action.payload;
		},
		clearUserData: (state) => {
			state.userID = null;
			state.userData = null;
			state.isAdmin = false;
			state.gamesData = null;
		},
	},
});

export const { setIsAdmin, setUserID, setUserData, setGamesData, clearUserData } = userDataSlice.actions;
export const userDataReducer = userDataSlice.reducer;
