import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "@/store/reducers/step-slice";
import userReducer from "@/store/reducers/user-slice";

const store = configureStore({
  reducer: {
    step: stepReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
