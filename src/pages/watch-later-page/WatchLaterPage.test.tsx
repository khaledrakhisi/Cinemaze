import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import { store } from "../../redux/store";

import WatchLaterPage from "./WatchLaterPage.component";

describe("Watchlater Page component tests", () => {
  it("should have Watch Later text", () => {
    render(
      <Provider store={store}>
        <WatchLaterPage />
      </Provider>
    );

    const el = screen.queryByText(/Watch Later/i);
    expect(el).toBeInTheDocument();
  });

  //   it("should have list", () => {
  //     render(
  //       <Provider store={store}>
  //         <WatchLaterPage />
  //       </Provider>
  //     );
  //     const el = screen.queryByRole("list");
  //     expect(el).toBeInTheDocument();
  //   });
});
