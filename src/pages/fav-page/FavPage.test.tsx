import { render, screen } from "@testing-library/react";
import FavPage from "./FavPage.component";

describe("Favorites Page component tests", () => {
  it("should have Favorites text", () => {
    render(<FavPage />);

    const el = screen.queryByText(/Favourites/i);
    expect(el).toBeInTheDocument();
  });

  it("should have list", () => {
    render(<FavPage />);
    const el = screen.queryByRole("list");
    expect(el).toBeInTheDocument();
  });
});
