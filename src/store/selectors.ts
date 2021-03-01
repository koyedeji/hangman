import { createSelector } from "reselect";
import { AppState } from "store";

export const themeSelector = ({ themes }: AppState) => themes;

export const gameSelector = ({ game }: AppState) => game;

export const allThemesSelector = createSelector(
  themeSelector,
  (themes) => themes.all
);

export const isPlayingSelector = createSelector(
  gameSelector,
  (game) => game.isPlaying
);

export const optionsSelector = createSelector(
  gameSelector,
  (game) => game.options
);
