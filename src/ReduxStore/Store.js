import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "../ReduxSlices/CardReducer";

const Store = configureStore({
  reducer: {
    card: CardReducer,
  },
});

export default Store;
