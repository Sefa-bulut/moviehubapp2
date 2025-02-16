import { configureStore, createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    favorites: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(movie => movie.id !== action.payload);
    }
  },
});

export const { setMovies, addFavorite, removeFavorite } = movieSlice.actions;

const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
  },
});

export default store;