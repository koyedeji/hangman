import ActionConst from "../constants";

export interface Options {
  mode?: string;
  theme?: string;
}

export interface GameState {
  isPlaying: boolean;
  options: Options;
}

export interface SetOptionsAction {
  type: typeof ActionConst.Game.SET_OPTIONS;
  payload: Options;
}

export interface StartGameAction {
  type: typeof ActionConst.Game.START;
  payload?: any;
}

export type GameActions = StartGameAction | SetOptionsAction;
