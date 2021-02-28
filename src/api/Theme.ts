export interface ThemeProps {
  tip: string;
  word: string;
}

export interface AvailableThemes {
  mixed: ThemeProps[];
  actors: ThemeProps[];
  movies: ThemeProps[];
}

const genRandomNum = (num = 1): number => {
  return Math.floor(Math.random() * num);
};

class Theme {
  private actors: ThemeProps[] = [{ word: "actors", tip: "c" }];
  private movies: ThemeProps[] = [{ word: "movies", tip: "m" }];
  private mixed: ThemeProps[] = [];

  private themes: AvailableThemes = {
    actors: this.actors,
    movies: this.movies,
    mixed: [...this.mixed, ...this.actors, ...this.movies],
  };

  getThemes(): Promise<AvailableThemes> {
    return new Promise((resolve) => {
      const ms = genRandomNum(5) * 1000;
      setTimeout(() => {
        resolve(this.themes);
      }, ms);
    });
  }

  getSelectedTheme(theme: string): Promise<ThemeProps[]> {
    return new Promise((resolve) => {
      const ms = genRandomNum(5) * 1000;
      setTimeout(() => {
        resolve(this.themes[theme as keyof AvailableThemes]);
      }, ms);
    });
  }
}

export default Theme;
