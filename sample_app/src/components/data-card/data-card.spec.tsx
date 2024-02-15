import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { DataCard } from ".";

const data = {
  name: "john",
  age: 25,
  count: 5,
};

describe("DataCard", () => {
  it("should display the correct data", () => {
    render(<DataCard data={data} />);

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("25 ans")).toBeInTheDocument();
    expect(screen.getByText("Nombre de requêtes : 5")).toBeInTheDocument();
  });
});
