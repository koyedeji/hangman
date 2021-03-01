import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allThemesSelector, isPlayingSelector } from "store/selectors";
import { themesAction, gameAction } from "store/actions";

interface UseHangman {
  setOptions(options: { mode?: string; theme?: string }): void;
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

  const getAllThemes = useCallback(async () => {
    await dispatch(themesAction.getAllThemes());
  }, [dispatch]);

  return {
    startGame,
    setOptions,
    isPlaying,
    getAllThemes,
    themes,
  };
};
