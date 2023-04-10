import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
    searchUsers: build.query<any, string>({
      //   query: () => 'search/users',
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
        },
      }),
    }),
  }),
});

// const { useSearchUsersMutation } = githubApi;
export const { useSearchUsersQuery } = githubApi;
