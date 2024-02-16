"use client";

import { DataCard, Form } from "@/components";
import { useState } from "react";
import { fetchAgifyApi } from "@/utils";
import classes from "./page.module.css";
import type { Data } from "@/components";

export default function Home() {
  const [data, setData] = useState<Data>();

  const handleFormSubmit = async (inputValue: string) => {
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
