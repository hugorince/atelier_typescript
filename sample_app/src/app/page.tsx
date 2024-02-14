"use client";

import { DataCard, Form } from "@/components";
import { useState } from "react";
import { fetchAgifyApi } from "@/utils";

export default function Home() {
  const [data, setData] = useState();

  const handleFormSubmit = async (inputValue) => {
    const result = await fetchAgifyApi(inputValue);
    setData(result);
  };

  return (
    <main>
      <Form handleFormSubmit={handleFormSubmit} />
      {data && <DataCard data={data} />}
    </main>
  );
}
