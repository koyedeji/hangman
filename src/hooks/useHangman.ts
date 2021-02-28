import { useDispatch, useSelector } from "react-redux";
import { themesSelector } from "store/selectors";
import { themesAction } from "store/actions";

interface UseHangman {
  getThemes(): Promise<void>;
  themes: Record<string, any> | null;
}

export const useHangman = (): UseHangman => {
  const themes = useSelector(themesSelector);
  const dispatch = useDispatch();

  const getThemes = async () => {
    dispatch(themesAction.getThemes());
  };

  return {
    getThemes,
    themes,
  };
};
