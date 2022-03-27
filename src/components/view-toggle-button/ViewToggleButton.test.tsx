import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import { store } from "../../redux/store";

import ViewToggleButtons from "./ViewToggleButton.component";

describe("ViewToggleButton component tests", () => {
  it("should have toggle buttons", () => {
    render(
      <Provider store={store}>
        <ViewToggleButtons />
      </Provider>
    );
    const el = screen.getByTestId("view-toggle-buttons");
    expect(el).toBeInTheDocument();
  });
});
