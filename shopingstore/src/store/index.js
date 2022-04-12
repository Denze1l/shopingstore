import { configureStore, createSlice } from "@reduxjs/toolkit";

const myFirstSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});

const Store = configureStore({
  reducer: myFirstSlice.reducer,
});

export const actions = myFirstSlice.actions;

export default Store;
