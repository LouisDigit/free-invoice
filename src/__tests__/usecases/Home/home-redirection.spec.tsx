import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Home from "../../../ui/views/Public/Home";
import Login from "../../../ui/views/Public/Login";
import userEvent from "@testing-library/user-event";
import Register from "../../../ui/views/Public/Register";

describe("Redirection from the Home page", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </MemoryRouter>
    );
  });

  it("Should redirect to Login Page", async () => {
    const loginLink = screen.getByRole("link", { name: /login/i });
    await userEvent.click(loginLink);
    // verify navigation to "no match" route
    expect(screen.getByText(/you are on the login page/i)).toBeInTheDocument();
  });

  it("Should redirect to Register Page", async () => {
    const registerLink = screen.getByRole("link", { name: /register/i });
    await userEvent.click(registerLink);
    // verify navigation to "no match" route
    expect(
      screen.getByText(/you are on the register page/i)
    ).toBeInTheDocument();
  });
});
