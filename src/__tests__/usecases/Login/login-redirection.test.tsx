import { testingRouter } from "../../../router";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("Redirection from Login page", () => {
  describe("User click on Sign up link", () => {
    it("Should redirect to register page", async () => {
      render(testingRouter("/login"));
      const registerLink = screen.getByRole("link", {
        name: /sign up/i,
      }) as HTMLLinkElement;

      await act(async () => {
        await fireEvent.click(registerLink);
      });

      expect(screen.getByText(/register page/i)).toBeInTheDocument();
    });
  });
});
