import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themesAction, gameAction } from "store/actions";
import { allThemesSelector, isPlayingSelector } from "store/selectors";

const genRandom = (num: number) => {
  return Math.floor(Math.random() * num);
};

interface UseHangman {
  setOptions(options: { mode?: string; theme?: string }): void;
  setSelectedWord(options: { mode?: string; theme?: string }): void;
  getAllThemes(): void;
  startGame(): void;
  isPlaying: boolean;
  themes: Record<string, any> | null;
}

export const useHangman = (): UseHangman => {
  const dispatch = useDispatch();
  const themes = useSelector(allThemesSelector);
  const isPlaying = useSelector(isPlayingSelector);

  const setOptions = (options: { mode: string; theme: string }) => {
    dispatch(gameAction.setOptions(options));
  };

  const startGame = () => dispatch(gameAction.startGame());

  const setSelectedWord = (options: { mode: string; theme: string }) => {
    const selectedTheme = themes![options.theme];
    const selected = selectedTheme[genRandom(selectedTheme.length)];
    switch (options.mode) {
      case "easy":
        dispatch(gameAction.setEasyMode(selected));
        return;
      case "medium":
        dispatch(gameAction.setMediumMode(selected));
        return;
      case "hard":
        dispatch(gameAction.setHardMode(selected));
        return;
      default:
        throw new Error(`Selected mode (${options.mode}) is not available`);
    }
  };

  const getAllThemes = useCallback(async () => {
    await dispatch(themesAction.getAllThemes());
  }, [dispatch]);

  return {
    startGame,
    setOptions,
    setSelectedWord,
    isPlaying,
    getAllThemes,
    themes,
  };
};
