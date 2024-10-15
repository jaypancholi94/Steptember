import { getLocalUserData, updateLocalUserData } from "@/lib/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  weight: number;
}

const userSlice = createSlice({
  name: "user",
  initialState: getLocalUserData(),
  reducers: {
    setUserDetail: (
      state,
      action: PayloadAction<{ name: string; weight: number }>,
    ) => {
      state.name = action.payload.name;
      state.weight = action.payload.weight;
      updateLocalUserData(state);
    },
  },
});

export const { setUserDetail } = userSlice.actions;
export default userSlice.reducer;
