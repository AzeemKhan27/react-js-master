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
            const { id, newText } = action.payload; // Destructure payload to get id and newText
            const existingTodo = state.todos.find((todo) => todo.id === id);
            if(existingTodo){
                existingTodo.text = newText;
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;