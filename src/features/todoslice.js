import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: "abc", task: "demo-task", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const newtodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newtodo); // correct usage of direct mutation with Immer
    },

    deletetodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

  markasdone: (state, action) => {
  const todo = state.todos.find((todo) => todo.id === action.payload);
  if (todo) {
    todo.isDone = !todo.isDone; // toggle between true and false
  }
},
  },
});

// Export actions and reducer
export const { addtodo, deletetodo, markasdone } = todoSlice.actions;
export default todoSlice.reducer;

