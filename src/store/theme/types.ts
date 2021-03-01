import ActionConst from "../constants";
import { AvailableThemes } from "api";

export interface ThemesState {
  all: Record<string, any> | null;
}

export interface GetTallThemesAction {
  type: typeof ActionConst.Theme.GET_ALL;
  payload: AvailableThemes;
}

export type ThemesActionTypes = GetTallThemesAction;
