import {
  getLocalStepsData,
  sumUpSteps,
  updateLocalStepsData,
} from '@/lib/utils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type DataProps = {
  date: Date;
  steps: number;
};
export type StepState = {
  data: DataProps[];
  total: number;
};

const stepSlice = createSlice({
  name: 'step',
  initialState: getLocalStepsData(),
  reducers: {
    addSteps: (
      state,
      action: PayloadAction<{ date: string; steps: number }>
    ) => {
      const { date, steps } = action.payload;
      let _steps = [...state.data];
      const _date = new Date(date);

      const existingDateIndex = _steps.findIndex(
        (step) => step.date.getTime() === _date.getTime()
      );
      if (existingDateIndex !== -1) {
        _steps[existingDateIndex].steps += steps;
      } else {
        _steps = [..._steps, { date: new Date(_date), steps: steps }];
      }
      _steps.sort((a, b) => b.date.getTime() - a.date.getTime());

      state.data = _steps;
      state.total = sumUpSteps(state.data);
      updateLocalStepsData(state.data);
    },
    modfiySteps: (
      state,
      action: PayloadAction<{ date: string; steps: number; index: number }>
    ) => {
      const { date, steps, index } = action.payload;
      const _steps = [...state.data];
      const _date = new Date(date);

      const existingDateIndex = _steps.findIndex(
        (step) => step.date.getTime() === _date.getTime()
      );
      if (existingDateIndex !== -1 && existingDateIndex !== index) {
        console.log('-1');
        _steps[existingDateIndex].steps += steps;
        _steps.splice(index, 1);
      } else {
        console.log('0');
        _steps[index] = { date: new Date(date), steps };
      }
      state.data = _steps;
      state.total = sumUpSteps(state.data);
      updateLocalStepsData(state.data);
    },
    removeSteps: (state, action: PayloadAction<number>) => {
      const _steps = [...state.data];
      _steps.splice(action.payload, 1);
      state.data = _steps;
      state.total = sumUpSteps(state.data);
      updateLocalStepsData(state.data);
    },
  },
});

export const { addSteps, modfiySteps, removeSteps } = stepSlice.actions;
export default stepSlice.reducer;
