import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { githubApi } from './github/github.api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
  },
  // для работы с кэшем/авто обновл. обозначим middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(store.dispatch);
