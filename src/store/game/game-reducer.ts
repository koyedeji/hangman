import ActionConst from "../constants";
import { GameActions, GameState } from "./types";

const DEFAULT_STATE: GameState = {
  isPlaying: false,
  options: {
    mode: "",
    theme: "",
  },
  selected: {
    main: {},
    word: [],
    ui: [],
  },
};

const gameReducer = (state: GameState = DEFAULT_STATE, action: GameActions) => {
  switch (action.type) {
    case ActionConst.Game.START:
      return {
        ...state,
        isPlaying: true,
      };
    case ActionConst.Game.SET_OPTIONS:
      return {
        ...state,
        options: {
          ...state.options,
          ...action.payload,
        },
      };
    case ActionConst.Game.SET_EASY_MODE:
      return {
        ...state,
        selected: {
          ...state.selected,
          ...action.payload,
        },
      };
    case ActionConst.Game.SET_MEDIUM_MODE:
      return {
        ...state,
        selected: {
          ...state.selected,
          ...action.payload,
        },
      };
    case ActionConst.Game.SET_HARD_MODE:
      return {
        ...state,
        selected: {
          ...state.selected,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export type { GameState };
export default gameReducer;
