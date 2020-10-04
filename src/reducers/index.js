import { combineReducers } from "redux";
import fetchImageListReducer from "./fetchImageListReducer";
import fetchResultsReducer from "./fetchResultsReducer";

const rootReducer = combineReducers({
  imageList: fetchImageListReducer,
  results: fetchResultsReducer,
});

export default rootReducer;
