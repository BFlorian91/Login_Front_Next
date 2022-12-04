import { render, fireEvent, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils"; // ????
import Login from "./index";

describe("Login", () => {

  test("[INPUT EMAIL] Empty input", () => {
    act(() => render(<Login />));
    const emailInput = screen.getByPlaceholderText(/email/i);

    expect(emailInput).toBeEmptyDOMElement();
  });

  test("[INPUT EMAIL] Valid address", async () => {
    act(() => render(<Login />));

    const emailInput = screen.getByPlaceholderText(/email/i);
    const submitButton = screen.getByTestId(/submit/i);
    const errorMessage = screen.queryByText("Please enter a valid email");

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.click(submitButton);

    expect(errorMessage).not.toBeInTheDocument();
  });

  test("[INPUT EMAIL] Invalid address", async () => {
    act(() => render(<Login />));
    const emailInput = screen.getByPlaceholderText(/email/i);
    const submitButton = screen.getByTestId(/submit/i);

    fireEvent.change(emailInput, { target: { value: "test" } });
    fireEvent.click(submitButton);

    expect(await screen.findByText("Please enter a valid email"));
  });

  test("[INPUT EMAIL] Submit without address", async () => {
    act(() => render(<Login />));
    const submitButton = screen.getByTestId(/submit/i);

    fireEvent.click(submitButton);

    expect(await screen.findByText("This field is requiered"));
  });
  
});
