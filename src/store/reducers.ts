import themes, { ThemesState } from "./theme/theme-reducer";
import game, { GameState } from "./game/game-reducer";
import { combineReducers } from "redux";

export interface AppState {
  themes: ThemesState;
  game: GameState;
}

export default combineReducers<AppState>({
  themes,
  game,
});
