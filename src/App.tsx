import React from "react";
import "./App.css";
import Header from "./components/header";
import Input from "./components/input";
import ConstantList from "./utils/constant";

const App = () => {
  const title: string = ConstantList.TITLE;
  const taskDescription: string = ConstantList.TASK_DESCRIPTION;

  return (
    <React.Fragment>
      <Header title={title} />
      <span className="container">
        <h2>{taskDescription}</h2>
        <Input />
      </span>
    </React.Fragment>
  );
};

export default App;
