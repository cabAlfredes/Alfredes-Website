import { useReducer, createContext, useContext } from 'react';
import { images } from '../config/assets';

export const StateContext = createContext();
const StateDispatcher = createContext();

export const ColorModeContext = createContext({ toggleColorMode: () => { } });




const initialState = {
  showMenu: false,
  images: { ...images }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, showMenu: !state.showMenu };

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateDispatcher.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </StateDispatcher.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
export const useStateDispatch = () => useContext(StateDispatcher);
