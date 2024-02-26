import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {id:1, title: "html", body: "html is ..."},
    {id:2, title: "css", body: "css is ..."},
    {id:3, title: "javascript", body: "javascript is ..."}
  ],
  mode: 'WELCOME',
  id: 0
}
const topicSlice = createSlice({
  name: 'topicSlice',
  initialState: initialState,
  reducers: {
    addTopic: (state, action) => {
      state.todos.push(action.payload)
      state.mode = 'READ'
      state.id = action.payload.id
      return state
    },
    updateTopic: (state, action) => {
      state.todos = state.todos.map(t => t.id === action.payload.id ? action.payload : t)
      state.mode = 'READ'
      state.id = action.payload.id
      return state
    },
    removeTopic: (state, action) => {
      state.todos = state.todos.filter(t => t.id !== action.payload.id)
      state.mode = 'WELCOME'
      state.id = 0
      return state
    },
    changeMode: (state, action) => {
      state.mode = action.payload
      return state
    },
    changeId: (state, action) => {
      state.id = action.payload
      return state
    }
  }
})
export default topicSlice
export const {addTopic, updateTopic, removeTopic, changeMode, changeId} = topicSlice.actions