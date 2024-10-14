import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  weight: number;
}

const initialState: UserState = {
  name: "",
  weight: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetail: (
      state,
      action: PayloadAction<{ name: string; weight: number }>,
    ) => {
      state.name = action.payload.name;
      state.weight = action.payload.weight;
    },
  },
});

export const { setUserDetail } = userSlice.actions;
export default userSlice.reducer;
