import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, ServerResponse } from '../../models/models';

// build
// query - получение данных
// mutation- изменение данных

export const githubApi = createApi({
  reducerPath: 'github/api', // Здесь будут храниться все закэшированные данные
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com', // Для всей этой api базовый url
  }),

  endpoints: (build) => ({
    // generic: ответ от сервера, параметр для осуществления запроса
    // searchUsers: build.query<ServerResponse<IUser>, string>({
    searchUsers: build.query<IUser[], string>({
      //   query: () => 'search/users',
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      // трансформируем данные из ответа
      transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
  }),
});

// const { useSearchUsersMutation } = githubApi;
export const { useSearchUsersQuery } = githubApi;
