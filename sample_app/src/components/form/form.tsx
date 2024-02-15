"use client";

import { type SyntheticEvent, useState } from "react";
import classes from "./form.module.css";

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
    <form onSubmit={onSubmit} className={classes.formWrapper}>
      <label htmlFor="text_input" className="sr-only">
        Entre ton nom :
      </label>
      <input
        type="text"
        id="text_input"
        value={inputValue}
        onChange={onChange}
        placeholder="Entre ton nom"
        aria-label="Text input"
        required
      />
      <button type="submit">Calcule ton âge</button>
    </form>
  );
};
