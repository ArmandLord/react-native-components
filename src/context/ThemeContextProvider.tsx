import React, {PropsWithChildren, useReducer} from 'react';
import {ThemeContext} from './ThemeContext';
import {reducer} from './ThemeReducer';

export type TypeTheme = 'dark' | 'light' | 'custom';

export interface ThemeInitialStateProps {
  theme: TypeTheme;
}

const initialState: ThemeInitialStateProps = {
  theme: 'light',
};

export const ThemeContextProvider = ({children}: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeTheme = (theme: TypeTheme): void => {
    dispatch({
      type: 'SET_THEME',
      payload: theme,
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        // methods
        changeTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
