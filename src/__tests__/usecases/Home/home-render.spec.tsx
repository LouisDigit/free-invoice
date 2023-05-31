import { render, screen } from "@testing-library/react";
import Home from "../../../ui/views/Public/Home";
import { MemoryRouter } from "react-router-dom";

describe("Feature: User navigate to the Home page", () => {
  describe("Rule: The elements render correctly", () => {
    test("User see the main title", () => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
      const titleElement = screen.getByText(/Home/i);
      expect(titleElement).toBeInTheDocument();
    });
  });
});
