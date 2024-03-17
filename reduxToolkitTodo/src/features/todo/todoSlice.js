import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{
        id : 1,
        text : "Hello World!"
    }]
}

const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo: (state,action) => {
            const todo = {
                id : nanoid(),
                text : action.payload  // we are getting text data from action
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => { //state give current data, and in action we get passing data
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state,action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo)
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;