import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import counterSliceReducer from './slices/counterSlice';
import breakpointSliceReducer from './slices/breakpointSlice';

const combinedReducer = combineReducers({
  counterSlice: counterSliceReducer,
  breakpointSliceReducer: breakpointSliceReducer,
});
// create your reducer

const innerStore = configureStore({
  reducer: combinedReducer,
});

export type InnerRootStoreState = ReturnType<typeof innerStore.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof innerStore.dispatch;

// Infer the `RootState` and `AppDispatch` types from the store itself

const reducer = (state: InnerRootStoreState, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;

// create a makeStore function
const makeStore = () => store;

// export an assembled wrapper
export const wrapper = createWrapper(makeStore);
