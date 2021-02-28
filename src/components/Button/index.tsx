import React, { FC, SyntheticEvent } from "react";
import s from "./Button.module.scss";
import cn from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?(e?: SyntheticEvent<HTMLButtonElement>): void;
  variant?: "primary";
  size?: "sm" | "md";
  className?: string;
}

const Button: FC<Props> = ({
  className,
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  size = "md",
  ...props
}) => {
  const rootClassNames = cn(
    s.root,
    [
      {
        [s.primary]: variant === "primary",
        [s.md]: size === "md",
        [s.sm]: size === "sm",
      },
    ],
    className
  );

  const handleClick = (e: SyntheticEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <button
      disabled={disabled}
      className={rootClassNames}
      onClick={handleClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
