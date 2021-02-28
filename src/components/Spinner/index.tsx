import React from "react";
import cn from "classnames";
import s from "./Spinner.module.scss";

interface Props {
  spin: boolean;
  className?: string;
}

const Spinner = ({ spin, className }: Props) => {
  return <div className={cn(s.root, { [s.spin]: spin }, className)} />;
};

export default Spinner;
