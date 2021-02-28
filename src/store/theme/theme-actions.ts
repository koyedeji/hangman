import { Dispatch } from "redux";
import Theme, { AvailableThemes } from "api";
import { ActionConst } from "../constants";
import { GetThemes } from "./types";

const ThemeAPI = new Theme();

export const getThemesAction = (payload: AvailableThemes): GetThemes => ({
  type: ActionConst.themes.getThemes,
  payload: payload,
});

export const getThemes = () => async (dispatch: Dispatch) => {
  const themes = await ThemeAPI.getThemes();
  dispatch(getThemesAction(themes));
};
