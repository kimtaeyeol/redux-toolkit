import { configureStore } from "@reduxjs/toolkit";
import topicSlice from "../features/topicSlice";

const store = configureStore({
  reducer: {
    topics: topicSlice.reducer
  }
})

export default store