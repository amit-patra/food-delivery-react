import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCart: (state, action) => {
      /*  Vanilla (Older) Redux DON'T MUTATE STATE, returning was mandetory
        * Still behanind the scene Resux is doing same execution (immer library to do this)
        const newState = [...state];
        newState.items.push(action.payload);
        return newState
        */
      // Redux Toolkit uses immerjs behind the scene
      // Mutating the state here
      state.items.push(action.payload);
    },
    removeCart: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
     // console.log(state);
      console.log(current(state)); // for debugging to see the currnet Array

      // Either mutate the existing state or rerurn new State
      state.items.length = 0;
      // Or
      // return {items: []};
    },
  },
});

export const { addCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
