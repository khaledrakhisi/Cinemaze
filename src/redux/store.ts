import { applyMiddleware, createStore } from "redux";
// import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export type TRootStoreType = ReturnType<typeof rootReducer>;

export { persistor, store };
