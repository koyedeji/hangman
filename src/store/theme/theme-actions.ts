import { Dispatch } from "redux";
import Theme, { AvailableThemes } from "api";
import ActionConst from "../constants";
import { GetTallThemesAction } from "./types";

const ThemeAPI = new Theme();

export const getAllThemesAction = (payload: AvailableThemes) => ({
  type: ActionConst.Theme.GET_ALL,
  payload: payload,
});

export const getAllThemes = () => async (
  dispatch: Dispatch<GetTallThemesAction>
) => {
  console.log("Hello");
  const themes = await ThemeAPI.getThemes();
  dispatch(getAllThemesAction(themes));
};
