import { configureStore } from "@reduxjs/toolkit";
import gameDataReducer from "../features/gameDataSlice";
import filterStateReducer from "../features/filterStateSlice";

export default configureStore({
  reducer: {
    game: gameDataReducer,
    filters: filterStateReducer,
  },
});
