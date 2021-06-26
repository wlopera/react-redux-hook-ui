import { createStore, combineReducers } from "redux";

import reducerKitchen from "./reducers/reducerKitchen";
import reducerStore from "./reducers/reducerStore";
import reducerOffer from "./reducers/reducerOffer";

const store = createStore(
  combineReducers({
    reducerKitchen,
    reducerStore,
    reducerOffer,
  })
);

export default store;
