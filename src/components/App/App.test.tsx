import { render, screen } from "@testing-library/react";
import App from "./App";

it("should have app title text", () => {
  render(<App />);

  const el = screen.queryByText(/CINEMAZE/i);
  expect(el).toBeInTheDocument();
});
