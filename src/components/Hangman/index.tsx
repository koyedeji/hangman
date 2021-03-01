import React, { useEffect, useState } from "react";
import cn from "classnames";
import { GameForm, GameBoard } from "components";

import { useHangman } from "hooks/useHangman";
import Spinner from "components/Spinner";
import s from "./hangman.module.scss";

function Hangman() {
  const {
    themes,
    getAllThemes,
    setOptions,
    startGame,
    isPlaying,
  } = useHangman();

  const isLoading = themes === null;

  const handleSubmit = (options: { mode?: string; theme?: string }): void => {
    setOptions(options);
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
