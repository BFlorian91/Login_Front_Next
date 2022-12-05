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

    expect(() => screen.findByText("Please enter a valid email"));
  });

  test("[INPUT EMAIL] Submit without address", async () => {
    act(() => render(<Login />));
    const submitButton = screen.getByTestId(/submit/i);

    fireEvent.click(submitButton);

    expect(() => screen.findByText("This field is requiered"));
  });

  // Password INPUT TESTING

  test("[INPUT PASSWORD] Empty Input", () => {
    act(() => render(<Login />));
    const passwordInput = screen.getByPlaceholderText("******************");

    expect(passwordInput).toBeEmptyDOMElement();
  });

  test("[INPUT PASSWORD] Valid Password", async () => {
    act(() => render(<Login />));

    const passwordInput = screen.getByPlaceholderText("******************");
    const submitButton = screen.getByTestId(/submit/i);
    const errorMessage = screen.queryByText("Your password must have 8 characters or more");

    fireEvent.change(passwordInput, { target: { value: "blablabla" } });
    fireEvent.click(submitButton);

    expect(errorMessage).not.toBeInTheDocument();
  });

  test("[INPUT PASSWORD] Invalid password length", async () => {
    act(() => render(<Login />));
    const passwordInput = screen.getByPlaceholderText("******************");
    const submitButton = screen.getByTestId(/submit/i);

    fireEvent.change(passwordInput, { target: { value: "test" } });
    fireEvent.click(submitButton);

    expect(await screen.findByText("Your password must have 8 characters or more"));
  });

  test("[INPUT PASSWORD] Submit without password", () => {
    act(() => render(<Login />));
    const submitButton = screen.getByTestId(/submit/i);

    fireEvent.click(submitButton);

    expect(() => screen.findByText("This field is requiered"));
  });
  
});
