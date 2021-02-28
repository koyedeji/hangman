import themes, { ThemesState } from "./theme/theme-reducer";
import { combineReducers } from "redux";

export interface AppState {
  themes: ThemesState;
}

export default combineReducers<AppState>({
  themes,
});
