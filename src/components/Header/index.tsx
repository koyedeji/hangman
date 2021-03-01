import React from "react";
import cn from "classnames";
import { useUiTheme } from "components/themeContext";
import Logo from "components/Logo";
import s from "./Header.module.scss";

interface Props {
  className?: string;
}

function Header({ className }: Props) {
  const { toggleTheme } = useUiTheme();
  const rootClassNames = cn(s.root, className);
  return (
    <header className={rootClassNames}>
      <div className="container">
        <Logo />
      </div>
    </header>
  );
}

export default Header;
