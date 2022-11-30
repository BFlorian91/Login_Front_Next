import { render, fireEvent, screen } from "@testing-library/react";
import login from './index'

//test block
test("login page", () => {
// render the component on virtual dom
render(<Index />);

//select the elements you want to interact with
const signinBtn= screen.getByTestId("signin-button");
const incrementBtn = screen.getByTestId("increment");

//interact with those elements
fireEvent.click(signinBtn);

//assert the expected result
expect(counter).toHaveTextContent("1");
});