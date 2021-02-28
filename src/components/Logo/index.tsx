import React from "react";
import cn from "classnames";

interface Props {
  className?: string;
}
function Index({ className }: Props) {
  const rootClassNames = cn("logo", className);
  return (
    <svg className={rootClassNames} height="65" width="180">
      <text x="0" y="45">
        Hangman
      </text>
    </svg>
  );
}

export default Index;
