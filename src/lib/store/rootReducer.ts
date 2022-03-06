import { combineReducers } from "redux";

// slices
import filters from "./slices/filtersSlice";

const rootReducer = combineReducers({
  filters,
});

export default rootReducer;
