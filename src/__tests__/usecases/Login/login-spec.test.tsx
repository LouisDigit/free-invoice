import { render, screen } from "@testing-library/react";
import Login from "../../../ui/views/Public/Login";
import userEvent from "@testing-library/user-event";
describe("User see the login form", () => {
  beforeEach(() => {
    render(<Login />);
  });
  describe("Rule: Interaction with the form", () => {
    test("User click on the email label", async () => {
      const emailLabel = screen.getByText(/email/i);
      const emailInput = screen.getByRole("textbox");

      await userEvent.click(emailLabel);

      expect(emailInput).toHaveFocus();
    });
  });
});
