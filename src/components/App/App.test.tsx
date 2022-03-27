import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { store } from "../../redux/store";

import App from "./App";

it("should have app title text", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  const el = screen.queryByText(/CINEMAZE/i);

  expect(el).toBeInTheDocument();
});
