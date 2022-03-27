import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import { store } from "../../redux/store";

import HomePage from "./HomePage.component";

describe("HomePage component tests", () => {
  it("should have search text input", () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const el = screen.queryByRole("textbox");
    expect(el).toBeInTheDocument();
  });

  //   it("should have list", () => {
  //     render(
  //       <Provider store={store}>
  //         <HomePage />
  //       </Provider>
  //     );
  //     const el = screen.queryByRole("list");
  //     expect(el).toBeInTheDocument();
  //   });
});
