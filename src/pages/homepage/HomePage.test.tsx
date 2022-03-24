import { render, screen } from "@testing-library/react";

import HomePage from "./HomePage.component";

describe("HomePage component tests", () => {
  it("should have search text input", () => {
    render(<HomePage />);
    const el = screen.queryByRole("textbox");
    expect(el).toBeInTheDocument();
  });

  it("should have list", () => {
    render(<HomePage />);
    const el = screen.queryByRole("list");
    expect(el).toBeInTheDocument();
  });
});
