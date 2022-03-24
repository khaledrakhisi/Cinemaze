import { render, screen } from "@testing-library/react";
import NavBottom from "./NavBottom.component";

describe("Navigation component tests", () => {
  it("should have navigation buttons", () => {
    render(<NavBottom />);
    const el = screen.getByTestId("nav");
    expect(el).toBeInTheDocument();
  });
});
