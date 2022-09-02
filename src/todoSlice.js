import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    listInput: "",
    listItems: [
      {
        checked: false,
        text: "Item 1",
      },
      {
        checked: true,
        text: "Item 2",
      },
    ],
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
  },
});

export const { changeInput, checkItem, addItem, deleteItem } =
  todoSlice.actions;
export default todoSlice;
