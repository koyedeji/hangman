import React, { ChangeEvent, useState } from "react";
import RadioOptions from "components/RadioOptions";

interface UseOptions {
  name: string;
  initialValue: string;
  options: string[];
}
export const useRadioOptions = ({
  name,
  initialValue,
  options,
}: UseOptions) => {
  const [selectedOption, setSelected] = useState(initialValue);

  const handleSelected = (e: ChangeEvent<HTMLInputElement>): void => {
    e.stopPropagation();
    if (e.currentTarget.checked) {
      setSelected(e.currentTarget.value);
    }
  };

  const Options = (): JSX.Element => {
    return (
      <RadioOptions
        selected={selectedOption}
        onChange={handleSelected}
        options={options}
        name={name}
      />
    );
  };

  return {
    Options,
    selectedOption,
  };
};
