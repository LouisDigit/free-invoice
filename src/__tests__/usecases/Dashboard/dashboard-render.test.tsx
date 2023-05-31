import { render, screen } from "@testing-library/react";
import Dashboard from "../../../ui/views/Private/Dashboard";
describe("Feature: User navigate to the Dashboard page", () => {
  describe("Rule: The elements render correctly", () => {
    test("User see the main title", () => {
      render(<Dashboard />);
      const title = screen.getByText(/Dashboard/i);
      expect(title).toBeInTheDocument();
    });
  });
});
