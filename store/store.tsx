import React, { useReducer, createContext, useContext } from "react";
import { images } from "@/config/assets";

const initialState = {
	showMenu: false,
	images: { ...images },
	darkMode: true,
};
type AppState = typeof initialState;

export const StateContext = createContext<AppState | null>(null);
const StateDispatcher = createContext<React.Dispatch<Action>>(null);
type Action =
	| { type: "TOGGLE_MENU" }
	| { type: "TOGGLE_DARK_MODE" }
	| { type: "SET_IMAGES"; images: typeof images }
	| { type: string };

const reducer = (state: AppState, action: Action): AppState => {
	switch (action.type) {
		case "TOGGLE_MENU":
			return { ...state, showMenu: !state.showMenu };
		case "TOGGLE_DARK_MODE":
			return { ...state, darkMode: !state.darkMode };

		default:
			throw new Error(`Unknown action: ${action.type}`);
	}
};

export const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer<React.Reducer<AppState, Action>>(
		reducer,
		initialState,
	);

	return (
		<StateContext.Provider value={state}>
			<StateDispatcher.Provider value={dispatch}>
				{children}
			</StateDispatcher.Provider>
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
export const useStateDispatch = () => useContext(StateDispatcher);
