import ActionConst from "../constants";
import { addUnderscore } from "lib/game-utils";
import { StartGameAction, SetOptionsAction, Options } from "./types";

export const startGame = (): StartGameAction => ({
  type: ActionConst.Game.START,
});

export const setOptions = (payload: Options): SetOptionsAction => ({
  type: ActionConst.Game.SET_OPTIONS,
  payload,
});

export const setEasyMode = (selected: Record<string, any>) => {
  const displayWord = addUnderscore([...selected.word]);
  return {
    type: ActionConst.Game.SET_EASY_MODE,
    payload: {
      main: selected,
      word: [...selected.word],
      ui: displayWord,
    },
  };
};

export const setMediumMode = (selected: Record<string, any>) => {
  const displayWord = addUnderscore([...selected.word], 3);
  return {
    type: ActionConst.Game.SET_MEDIUM_MODE,
    payload: {
      main: selected,
      word: [...selected.word],
      ui: displayWord,
    },
  };
};

export const setHardMode = (selected: Record<string, any>) => {
  const displayWord = selected.word.replace(/[a-zA-Z0-9]/g, "_");
  return {
    type: ActionConst.Game.SET_MEDIUM_MODE,
    payload: {
      main: selected,
      word: [...selected.word],
      ui: [...displayWord],
    },
  };
};
