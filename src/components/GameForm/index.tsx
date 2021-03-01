import React, { FC, FormEvent } from "react";

import cn from "classnames";
import Button from "components/Button";
import { useRadioOptions } from "hooks/useOptions";
import s from "./GameForm.module.scss";

interface Props {
  themeOptions: string[];
  modeOptions: string[];
  className?: string;
  onSubmit?(...args: any[]): void;
}

const GameForm: FC<Props> = (props) => {
  const { className, themeOptions, modeOptions, onSubmit } = props;

  const { Options: ThemeOption, selectedOption: theme } = useRadioOptions({
    name: "theme",
    options: themeOptions,
    initialValue: "",
  });

  const { Options: ModeOption, selectedOption: mode } = useRadioOptions({
    name: "mode",
    options: modeOptions,
    initialValue: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit({ mode, theme });
    }
  };

  const rootClassNames = cn(s.root, className);

  return (
    <form onSubmit={handleSubmit} className={cn(rootClassNames)}>
      <div>
        <h2 className={s.heading}>Select Theme</h2>
        <hr className={cn(s.separator)} />
        <ThemeOption />
        <hr className={cn(s.separator)} />
      </div>

      <div>
        <h2 className={s.heading}>Select Mode</h2>
        <hr className={cn(s.separator)} />
        <ModeOption />
        <hr className={cn(s.separator)} />
      </div>

      <div className={s.spacer}>
        <Button
          disabled={mode === "" || theme === ""}
          className={s.mLeft}
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default GameForm;
