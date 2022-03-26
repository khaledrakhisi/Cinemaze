import { render, screen } from "@testing-library/react";

import ViewToggleButtons from "./ViewToggleButton.component";

describe("ViewToggleButton component tests", () => {
  it("should have toggle buttons", () => {
    render(<ViewToggleButtons />);
    const el = screen.getByTestId("view-toggle-buttons");
    expect(el).toBeInTheDocument();
  });
});
