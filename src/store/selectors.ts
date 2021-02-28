import { createSelector } from "reselect";
import { AppState } from "store";

export const themesSelector = ({ themes }: AppState) => themes.themes;
