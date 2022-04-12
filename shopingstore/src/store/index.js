import { createSlice, configureStore } from "@reduxjs/toolkit";

const myFirstSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducer: {
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

export const actions = myFirstSlice.actions;

const Store = configureStore({
  reducer: myFirstSlice.reducer,
});

export default Store;
