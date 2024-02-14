"use client";

import { DataCard, Form } from "@/components";
import { useState } from "react";
import { fetchAgifyApi } from "@/utils";
import classes from "./page.module.css";

export default function Home() {
  const [data, setData] = useState();

  const handleFormSubmit = async (inputValue) => {
    const result = await fetchAgifyApi(inputValue);
    setData(result);
  };

  return (
    <main className={classes.pageWrapper}>
      <Form handleFormSubmit={handleFormSubmit} />
      {data && <DataCard data={data} />}
    </main>
  );
}
