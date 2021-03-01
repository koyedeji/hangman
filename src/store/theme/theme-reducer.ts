import ActionConst from "../constants";
import { ThemesActionTypes, ThemesState } from "./types";

const DEFAULT_STATE: ThemesState = {
  all: null,
};

const themeReducer = (
  state: ThemesState = DEFAULT_STATE,
  action: ThemesActionTypes
) => {
  switch (action.type) {
    case ActionConst.Theme.GET_ALL:
      return {
        ...state,
        all: action.payload,
      };
    default:
      return state;
  }
};

export type { ThemesState };
export default themeReducer;
