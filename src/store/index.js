import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./features/counterSlice"
import userSlice from "./features/userSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
  },
})
