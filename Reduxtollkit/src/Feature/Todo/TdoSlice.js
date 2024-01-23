import {createSlice, nanoid} from "@reduxjs/toolkit";


const initialState = {
    todos: [
        {id: 1, text: "Hello World"}
    ]
}
// A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
// const Sayhellow=()=>{

// }

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // reducers properties and function
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)

        },
        removeTodo: (state, action) => {

            state.todos = state.todos.filter((todo) => todo.id !== action.payload)

        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload;
            const existingTodo = state.todos.find((todo) => todo.id === id)
            if(existingTodo) {
                existingTodo.text = text
            }
        }
    }
})
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;