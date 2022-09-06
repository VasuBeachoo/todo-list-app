import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    theme: "dark",
    listInput: "",
    listItems: [],
    listFilter: "All",
  },
  reducers: {
    switchTheme: (state) => {
      state.theme === "light"
        ? (state.theme = "dark")
        : (state.theme = "light");
    },
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
    replaceList: (state, action) => {
      state.listItems = action.payload;
    },
  },
});

export const {
  switchTheme,
  changeInput,
  checkItem,
  addItem,
  deleteItem,
  clearCompleted,
  switchFilter,
  replaceList,
} = todoSlice.actions;
export default todoSlice;
