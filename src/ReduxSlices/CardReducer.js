import { createSlice } from "@reduxjs/toolkit";

const CardReducer = createSlice({
  name: "card",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },

    removeItems: (state, action) => {
      const filterData = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
      state.items = filterData;
    },
    clearCard: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItems, clearCard } = CardReducer.actions;
export default CardReducer.reducer;
