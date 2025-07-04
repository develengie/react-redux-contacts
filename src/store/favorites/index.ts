import { favoritesSlice } from "./slice";

export const { fetchFavorites, fetchFavoritesSuccess, fetchFavoritesError } =
    favoritesSlice.actions;
export default favoritesSlice.reducer;
