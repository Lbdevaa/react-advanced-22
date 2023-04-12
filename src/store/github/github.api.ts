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
  refetchOnFocus: true, // При возвращении на страницу (окно получает фокус) происходит обновление данных

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
    // getUserRepos: build.query<any, void>({
    getUserRepos: build.query<any, string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
  }),
});

// const { useSearchUsersMutation } = githubApi;
// useLazy - не делает запрос сразу
export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi;
