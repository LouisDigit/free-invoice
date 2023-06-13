import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { testingRouter } from "../../../router";
import { $CombinedState } from "redux";

describe("Rule: Interaction with the Login form", () => {
  beforeEach(() => {
    render(testingRouter("/login"));
  });
  describe("User click on the email label", () => {
    it("Should get the focus on email input", async () => {
      const emailLabel = screen.getByText(/email/i);
      const emailInput = screen.getByRole("textbox");

      await userEvent.click(emailLabel);

      expect(emailInput).toHaveFocus();
    });
  });

  describe("User fill the fields of the form", () => {
    it("Should enabled the submit button", async () => {
      const submitButton = screen.getByRole("button", {
        name: /login/i,
      }) as HTMLButtonElement;

      const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
      const passwordInput = screen.getByLabelText(
        "Password"
      ) as HTMLInputElement;

      await fireEvent.change(emailInput, {
        target: { value: "louisv.digit@gmail.com" },
      });
      await fireEvent.change(passwordInput, { target: { value: "password" } });

      expect(submitButton.disabled).toBe(false);
    });

    it("Should throw an error of identifier", async () => {
      const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
      const passwordInput = screen.getByLabelText(
        "Password"
      ) as HTMLInputElement;

      await fireEvent.change(emailInput, {
        target: { value: "something@dont.exist" },
      });

      await fireEvent.change(passwordInput, {
        target: { value: "thatdontexist" },
      });
      expect(
        screen.getByLabelText("User not found with this identifier")
      ).toBeInTheDocument();
    });
  });

  it("Should disabled the submit button", async () => {
    const submitButton = screen.getByRole("button", {
      name: /login/i,
    }) as HTMLButtonElement;

    const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;

    await fireEvent.change(emailInput, {
      target: { value: "" },
    });
    await fireEvent.change(passwordInput, { target: { value: "" } });

    expect(submitButton.disabled).toBe(true);
  });
});
