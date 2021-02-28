import { ActionConst } from "../constants";
import { ThemesState, ThemesActionTypes } from "./types";

const DEFAULT_STATE: ThemesState = {
  themes: null,
};

const themeReducer = (
  state: ThemesState = DEFAULT_STATE,
  action: ThemesActionTypes
) => {
  switch (action.type) {
    case ActionConst.themes.getThemes:
      return {
        ...state,
        themes: action.payload,
      };
    default:
      return DEFAULT_STATE;
  }
};

export type { ThemesState };
export default themeReducer;
