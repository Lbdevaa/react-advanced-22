import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// const LS_FAV_KEY = 'reactfavouritekey';
const LS_FAV_KEY = 'rfk';

interface GithubState {
  favourites: string[];
}

const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
};

// slices - те же самые reducers. служат для описания изменения состояния
export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFaourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter((f) => f !== action.payload);
    },
  },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
