import React, { SyntheticEvent, FC } from "react";
import cn from "classnames";
import Button from "../Button";
import s from "./keyList.module.scss";

interface Props {
  onClick?: (...args: any[]) => void;
}

const KeyList: FC<Props> = ({ onClick }) => {
  const keys = [..."abcdefghijklmnopqrstuvwxyz"];

  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = e.currentTarget.getAttribute("data-value");
    if (onClick) {
      onClick(value);
    }
  };

  return (
    <ul className={cn(s.container)}>
      {keys.map((item) => {
        return (
          <Button
            key={item}
            onClick={handleClick}
            data-value={item}
            className={cn(s.key)}
            variant={"primary"}
            size={"sm"}
          >
            {item}
          </Button>
        );
      })}
    </ul>
  );
};

export default KeyList;
