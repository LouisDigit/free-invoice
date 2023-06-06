import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { testingRouter } from "../../../router";

describe("Redirection from the Home page", () => {
  beforeEach(() => {
    render(testingRouter("/"));
  });

  it("Should redirect to Login Page", async () => {
    const loginLink = screen.getByRole("button", { name: /login/i });
    await act(async () => {
      await userEvent.click(loginLink);
    });

    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
  });

  it("Should redirect to Register Page", async () => {
    const registerLink = screen.getByRole("button", { name: /register/i });
    await act(async () => {
      await userEvent.click(registerLink);
    });

    expect(screen.getByText(/register page/i)).toBeInTheDocument();
  });
});
