import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./slices/favoritesSlice";

import { rickAndMortyApi } from "../services/rickAndMortyApi";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,

    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});