import React from "react";
import cn from "classnames";
import Header from "components/Header";
import s from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const rootClassNames = cn(s.root);
  return (
    <div className={rootClassNames}>
      <Header />
      <main className={cn(s.main)}>{children}</main>
    </div>
  );
}

export default Layout;
