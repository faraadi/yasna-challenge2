import React, { createContext, useReducer, useContext } from 'react';

const initialContext = {}

const AppContext = createContext();

function appReducer(state, action) {
	const { type, payload } = action;
	if (!type) throw new Error("Unknown action dispatched");
	switch (type) {
		case appActions.setArtistData: {
			state = Object.assign({}, state, { artist: payload });
		}
		default: return state;
	}
}

export const appActions = {
	setArtistData: "setArtistData"
}

export default function AppProvider(props) {
	const [state, dispatch] = useReducer(appReducer, { ...initialContext });

	return (
		<AppContext.Provider value={[state, dispatch]}>
			{props.children}
		</AppContext.Provider>
	)
}

export function useAppContext() {
	return useContext(AppContext)[0]
}

export function useAppDispatch() {
	return useContext(AppContext)[1];
}