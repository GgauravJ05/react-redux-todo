import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [{id:1, task:"Sample", isDone:false}],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: { //state, action
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      }
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    marksAsDone: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, marksAsDone } = todoSlice.actions

export default todoSlice.reducer