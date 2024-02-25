import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type BreakpointType = 'desktop' | 'mobile';

interface BreakpointSliceDataManagement {
  breakpoint: BreakpointType | null;
}

const initialState: BreakpointSliceDataManagement = {
  breakpoint: null,
};

const breakpointSlice = createSlice({
  name: 'breakpointSlice',
  initialState: initialState,
  reducers: {
    changeBreakpoint: (state, action: PayloadAction<BreakpointType>) => {
      state.breakpoint = action.payload;
    },
  },
});

export const exportedActionObject = {
  actions: breakpointSlice.actions,
  reducer: breakpointSlice.reducer,
};

export default breakpointSlice.reducer;
