import ActionConst from "../constants";
import { GameActions, GameState } from "./types";

const DEFAULT_STATE: GameState = {
  isPlaying: false,
  options: {
    mode: "",
    theme: "",
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
    default:
      return state;
  }
};

export type { GameState };
export default gameReducer;
