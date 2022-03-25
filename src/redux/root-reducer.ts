import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import movieReducer from "./movie/movie-reducers";
import saveListReducer from "./save-lists/save-list-reducers";
import viewStyleReducer from "./ui/ui-reducer";

const presistConfig = {
  key: "root",
  storage,
  whitelist: ["UIState", "saveList"],
};

const rootReducer = combineReducers({
  movie: movieReducer,
  saveList: saveListReducer,
  UIState: viewStyleReducer,
});

export default persistReducer(presistConfig, rootReducer);
