import {createContext} from 'react';
import {TypeTheme, ThemeInitialStateProps} from './ThemeContextProvider';

interface ThemeContextProps extends ThemeInitialStateProps {
  theme: TypeTheme;
  changeTheme: (theme: TypeTheme) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);
