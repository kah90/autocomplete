import React, { useState } from "react";
import "./input.css";
import ConstantList from "../utils/constant";

const Input = () => {
  const inputData: string[] = ConstantList.INPUT_DATA;
  let [suggestionList, setSuggestionList] = useState<string[]>(inputData);
  let [inputValue, setInputValue] = useState<string>("");
  let [showSuggestionList, setSuggestionFlag] = useState<boolean>(true);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSuggestionFlag(true);
    setInputValue(e.currentTarget.value);
    setSuggestionList(
      inputData.filter((item) =>
        item.toLowerCase().startsWith(e.currentTarget.value.toLowerCase(), 0)
      )
    );
  };

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    setInputValue(e.currentTarget.innerText);
    setSuggestionList([e.currentTarget.innerText]);
    setSuggestionFlag(false);
  };

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder={ConstantList.INPUT_PLACEHOLDER}
        onChange={onChange}
        value={inputValue}
      />
      {showSuggestionList && (
        <ul>
          {suggestionList.map((item: string) => {
            return (
              <li key={item} onClick={onClick}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </React.Fragment>
  );
};
export default Input;
