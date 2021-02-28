import React, { ChangeEvent, FC } from "react";
import cn from "classnames";
import s from "./Radio.module.scss";

interface RadioOptionsProps {
  selected: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  options: string[];
  name: string;
}

const RadioOptions: FC<RadioOptionsProps> = (props) => {
  const { selected, options, onChange, name } = props;
  return (
    <>
      <ul>
        {options!.map((node, index) => {
          return (
            <li key={`name${index}`} className={cn(s.spacer)}>
              <label className={cn(s.radio)}>
                <span className={cn(s.radioInput)}>
                  <input
                    id={node.toLowerCase()}
                    value={node}
                    checked={selected === node}
                    onChange={onChange}
                    type="radio"
                    name={name}
                  />
                  <span className={cn(s.radioControl)} />
                </span>
                <span className={cn(s.radioLabel)}>{node}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default RadioOptions;
