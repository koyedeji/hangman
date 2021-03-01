import React, { useEffect } from "react";
import cn from "classnames";
import { useHangman } from "hooks/useHangman";
import { GameForm, GameBoard, Spinner } from "components";
import s from "./hangman.module.scss";

function Hangman() {
  const {
    themes,
    getAllThemes,
    setOptions,
    startGame,
    isPlaying,
    setSelectedWord,
  } = useHangman();

  const isLoading = themes === null;

  const handleSubmit = (options: { mode?: string; theme?: string }): void => {
    setOptions(options);
    setSelectedWord(options);
    startGame();
  };

  useEffect(() => {
    (async () => {
      await getAllThemes();
    })();
  }, [getAllThemes]);

  const rootClassNames = cn("container-sm", s.root);

  if (isLoading) {
    return (
      <div className={rootClassNames}>
        <Spinner className={s.spinner} spin={isLoading} />
      </div>
    );
  }

  return (
    <section>
      <div className={cn(rootClassNames)}>
        {!isPlaying ? (
          <GameForm
            onSubmit={handleSubmit}
            themeOptions={Object.keys(themes! || {})}
            modeOptions={["easy", "medium", "hard"]}
          />
        ) : (
          <GameBoard />
        )}
      </div>
    </section>
  );
}

export default Hangman;
