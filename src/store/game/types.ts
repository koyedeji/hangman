import ActionConst from "../constants";

export interface Options {
  mode?: string;
  theme?: string;
}

export interface GameState {
  isPlaying: boolean;
  options: Options;
  selected: {
    main: {};
    word: [];
    ui: [];
  };
}

export interface SetOptionsAction {
  type: typeof ActionConst.Game.SET_OPTIONS;
  payload: Options;
}

export interface StartGameAction {
  type: typeof ActionConst.Game.START;
  payload?: any;
}

export interface SetEasyModeAction {
  type: typeof ActionConst.Game.SET_EASY_MODE;
  payload: {
    main: Record<string, any>;
    word: [];
    ui: [];
  };
}

export interface SetMediumModeAction {
  type: typeof ActionConst.Game.SET_MEDIUM_MODE;
  payload: {
    main: Record<string, any>;
    word: [];
    ui: [];
  };
}

export interface SetHardModeAction {
  type: typeof ActionConst.Game.SET_HARD_MODE;
  payload: {
    main: Record<string, any>;
    word: [];
    ui: [];
  };
}

export type GameActions =
  | StartGameAction
  | SetOptionsAction
  | SetEasyModeAction
  | SetHardModeAction
  | SetMediumModeAction;
