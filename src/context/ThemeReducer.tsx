import {TypeTheme, ThemeInitialStateProps} from './ThemeContextProvider';

type ActionType = {
  type: 'SET_THEME';
  payload: TypeTheme;
};

export const reducer = (state: ThemeInitialStateProps, action: ActionType) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};
