import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    listInput: "",
    listItems: [],
    listFilter: "All",
  },
  reducers: {
    changeInput: (state, action) => {
      state.listInput = action.payload;
    },
    checkItem: (state, action) => {
      const item = state.listItems[action.payload];
      item.checked = !item.checked;
    },
    addItem: (state) => {
      if (state.listInput !== "") {
        state.listItems.push({ checked: false, text: state.listInput });
        state.listInput = "";
      }
    },
    deleteItem: (state, action) => {
      state.listItems.splice(action.payload, 1);
    },
    clearCompleted: (state) => {
      state.listItems = state.listItems.filter((item) => !item.checked);
    },
    switchFilter: (state, action) => {
      state.listFilter = action.payload;
    },
  },
});

export const {
  changeInput,
  checkItem,
  addItem,
  deleteItem,
  clearCompleted,
  switchFilter,
} = todoSlice.actions;
export default todoSlice;
