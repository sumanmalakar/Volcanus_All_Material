import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [
    { id: 1, title: "superman", descripton: "hero" },
    { id: 12, title: "superman 2", descripton: "hero2" },
  ],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload.todo);
    },
    deleteTodo: (state, action) => {
      state.todo.filter((data) => data.id != action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
