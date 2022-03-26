import { render, screen } from "@testing-library/react";

import WatchLaterPage from "./WatchLaterPage.component";

describe("Watchlater Page component tests", () => {
  it("should have Watch Later text", () => {
    render(<WatchLaterPage />);

    const el = screen.queryByText(/Watch Later/i);
    expect(el).toBeInTheDocument();
  });

  it("should have list", () => {
    render(<WatchLaterPage />);
    const el = screen.queryByRole("list");
    expect(el).toBeInTheDocument();
  });
});
