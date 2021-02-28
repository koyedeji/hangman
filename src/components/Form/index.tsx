import React, { FC, FormEvent } from "react";
import cn from "classnames";
import Button from "components/Button";
import { useRadioOptions } from "hooks/useOptions";
import s from "./Form.module.scss";

interface Props {
  className?: string;
  themeOptions: string[];
  modeOptions: string[];
  onSubmit?(...args: any[]): void;
}

const Form: FC<Props> = (props) => {
  const { themeOptions, modeOptions, className } = props;

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

export default Form;
