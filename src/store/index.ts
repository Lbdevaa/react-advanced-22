import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { githubApi } from './github/github.api';

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
  },
  // для работы с кэшем/авто обновл. обозначим middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});
