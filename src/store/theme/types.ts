import { ActionConst } from "../constants";
import { AvailableThemes } from "api";

export interface ThemesState {
  themes: null | AvailableThemes;
}

export interface GetThemes {
  type: typeof ActionConst.themes.getThemes;
  payload: AvailableThemes;
}

export type ThemesActionTypes = GetThemes;
