import {
  createContext,
  useState,
  useMemo,
  useEffect,
  useContext,
  useRef,
  FC,
  SyntheticEvent,
} from "react";

interface DefaultValue {
  theme?: string;
  toggleTheme?(e: SyntheticEvent<HTMLButtonElement, MouseEvent>): void;
}

export const ThemeContext = createContext<DefaultValue>({
  theme: "light",
});

ThemeContext.displayName = "UITheme";

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<string>(
    window.localStorage.getItem("theme") ?? "light"
  );

  const toggleTheme = (e: SyntheticEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  let rootElement = useRef<HTMLElement | null>();

  useEffect(() => {
    rootElement.current = document.documentElement;
    if (rootElement.current) {
      rootElement.current.setAttribute("data-theme", theme);
      window.localStorage.setItem("theme", theme);
    }

    return () => {
      rootElement.current = null;
    };
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useUiTheme = (): DefaultValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`useTheme must be used within ThemeProvider`);
  }
  return context;
};
