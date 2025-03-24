import { createSlice, nanoid } from '@reduxjs/toolkit'


const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            if (action.payload) {
                const todo = {
                    id: nanoid(),
                    text: action.payload
                }
                state.todos.push(todo)
            }
            else {
                alert("please write something...")
            }

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo)
        }

    }
})


export const { addTodo, removeTodo, updateTodo } = todoSlice.actions


export default todoSlice.reducer