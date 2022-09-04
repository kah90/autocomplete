import React from "react";
import "./header.css";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <React.Fragment>
      <header className="title">
        <h1>{title}</h1>
      </header>
    </React.Fragment>
  );
};

export default Header;
