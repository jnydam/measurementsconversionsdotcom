import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CounterSliceDataManagement {
  counter: number;
}

const initialState: CounterSliceDataManagement = {
  counter: 0,
};

const counterSlice = createSlice({
  name: 'topCounterSlice',
  initialState: initialState,
  reducers: {
    incrementCounter: (state) => {
      state.counter++;
    },
  },
});

export const exportedActionObject = {
  actions: counterSlice.actions,
  reducer: counterSlice.reducer,
};

export default counterSlice.reducer;
