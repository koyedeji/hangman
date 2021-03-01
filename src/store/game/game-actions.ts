import ActionConst from "../constants";
import { StartGameAction, SetOptionsAction, Options } from "./types";

export const startGame = (): StartGameAction => ({
  type: ActionConst.Game.START,
});

export const setOptions = (payload: Options): SetOptionsAction => ({
  type: ActionConst.Game.SET_OPTIONS,
  payload,
});
