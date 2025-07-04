import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

interface FavoritesState {
    loading: boolean;
    favorites: FavoriteContactsDto;
    error: string;
}

const initialState: FavoritesState = {
    loading: false,
    favorites: [],
    error: "",
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        fetchFavorites(state) {
            state.loading = true;
        },
        fetchFavoritesSuccess(
            state,
            action: PayloadAction<FavoriteContactsDto>
        ) {
            state.loading = false;
            state.favorites = action.payload;
            state.error = "";
        },
        fetchFavoritesError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
