"use client";

import { type SyntheticEvent, useState } from "react";

export const Form = ({ handleFormSubmit }) => {
  const [inputValue, setInputValue] = useState();

  const onChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    handleFormSubmit(inputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={inputValue} onChange={onChange} />
      <button type="submit">Check Age</button>
    </form>
  );
};
