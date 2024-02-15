import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { Form } from ".";

describe("Form component", () => {
  it("should submit form with input value", async () => {
    const handleFormSubmit = jest.fn();

    render(<Form handleFormSubmit={handleFormSubmit} />);

    const input = screen.getByLabelText("Text input");
    fireEvent.change(input, { target: { value: "John" } });

    const submitButton = screen.getByRole("button", {
      name: "Calcule ton âge",
    });
    submitButton.click();

    await waitFor(() => {
      expect(handleFormSubmit).toHaveBeenCalledWith("John");
    });
  });
});
