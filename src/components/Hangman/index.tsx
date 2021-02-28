import React, { useEffect } from "react";
import cn from "classnames";
import { useHangman } from "hooks/useHangman";
import GameOptions from "components/Form";
import Spinner from "components/Spinner";
import s from "./hangman.module.scss";

function Hangman() {
  const { themes, getThemes } = useHangman();

  const rootClassNames = cn("container-sm", s.root);

  useEffect(() => {
    (async () => {
      await getThemes();
    })();
  }, []);

  const isLoading = themes === null;

  return (
    <section>
      <div className={cn(rootClassNames)}>
        {isLoading ? (
          <Spinner className={cn(s.spinner)} spin={isLoading} />
        ) : (
          <GameOptions
            themeOptions={Object.keys(themes! || [])}
            modeOptions={["easy", "medium", "hard"]}
          />
        )}
      </div>
    </section>
  );
}

export default Hangman;
