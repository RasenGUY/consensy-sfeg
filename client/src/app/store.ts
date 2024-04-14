import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { blockchainApiSlice } from './blockchainApiSlice';

export const store = configureStore({
  reducer: {
    [blockchainApiSlice.reducerPath]: blockchainApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(
    blockchainApiSlice.middleware
  ),
  devTools: true 
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState,unknown,Action<string>>;