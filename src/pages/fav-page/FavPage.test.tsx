import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import { store } from "../../redux/store";

import FavPage from "./FavPage.component";

describe("Favorites Page component tests", () => {
  it("should have Favorites text", () => {
    render(
      <Provider store={store}>
        <FavPage />
      </Provider>
    );

    const el = screen.queryByText(/Favorites/i);
    expect(el).toBeInTheDocument();
  });

  //   it("should have list", () => {
  //     <Provider store={store}>
  //       <FavPage />
  //     </Provider>;
  //     const el = screen.queryByRole("list");
  //     expect(el).toBeInTheDocument();
  //   });
});
