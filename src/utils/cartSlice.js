import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    clearItem: () => {
      state.item.length = 0;
    },
    removeItem: (state) => {
      state.item.pop();
    },
  },
});

export const { addItem, clearItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
