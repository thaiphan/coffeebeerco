import { configureStore } from '@reduxjs/toolkit';
import { coffeebeercoApi } from './apis/coffeebeerco';

export const store = configureStore({
  reducer: {
    [coffeebeercoApi.reducerPath]: coffeebeercoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(coffeebeercoApi.middleware);
  },
});
