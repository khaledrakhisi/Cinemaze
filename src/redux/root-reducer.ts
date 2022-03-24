import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import movieReducer from "./movie/movie-reducers";
import viewStyleReducer from "./ui/ui-reducer";

const presistConfig = {
  key: "root",
  storage,
  whitelist: ["viewStyle"],
};

const rootReducer = combineReducers({
  movie: movieReducer,
  UIState: viewStyleReducer,
});

export default persistReducer(presistConfig, rootReducer);
