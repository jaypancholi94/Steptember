import { sumUpSteps } from "@/lib/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StepState {
  data: { date: Date; steps: number }[];
  total: number;
}

const initialState: StepState = {
  data: [],
  total: 0,
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    addSteps: (
      state,
      action: PayloadAction<{ date: string; steps: number }>,
    ) => {
      const { date, steps } = action.payload;
      let _steps = [...state.data];
      const _date = new Date(date);

      const existingDateIndex = _steps.findIndex(
        (step) => step.date.getTime() === _date.getTime(),
      );
      if (existingDateIndex !== -1) {
        _steps[existingDateIndex].steps += steps;
      } else {
        _steps = [..._steps, { date: new Date(_date), steps: steps }];
      }
      _steps.sort((a, b) => b.date.getTime() - a.date.getTime());

      state.data = _steps;
      state.total = sumUpSteps(state.data);
    },
  },
});

export const { addSteps } = stepSlice.actions;
export default stepSlice.reducer;
