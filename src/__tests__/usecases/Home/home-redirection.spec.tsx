import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { testingMemoryRouter } from "../../../router";

describe("Redirection from the Home page", () => {
  beforeEach(() => {
    render(testingMemoryRouter);
  });

  it("Should redirect to Login Page", async () => {
    const loginLink = screen.getByRole("link", { name: /login/i });
    await userEvent.click(loginLink);

    expect(screen.getByText(/you are on the login page/i)).toBeInTheDocument();
  });

  it("Should redirect to Register Page", async () => {
    const registerLink = screen.getByRole("link", { name: /register/i });
    await userEvent.click(registerLink);

    expect(
      screen.getByText(/you are on the register page/i)
    ).toBeInTheDocument();
  });
});
