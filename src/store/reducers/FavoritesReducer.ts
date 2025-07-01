import {
    FETCH_FAVORITES_ACTION,
    FETCH_FAVORITES_SUCCESS_ACTION,
    FETCH_FAVORITES_ERROR_ACTION,
} from "../actions";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { RootAction } from "../types";

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

export const favoritesReducer = (
    state = initialState,
    action: RootAction
): FavoritesState => {
    switch (action.type) {
        case FETCH_FAVORITES_ACTION:
            return {
                loading: true,
                favorites: [],
                error: "",
            };

        case FETCH_FAVORITES_SUCCESS_ACTION:
            return {
                loading: false,
                favorites: action.payload.favorites,
                error: "",
            };

        case FETCH_FAVORITES_ERROR_ACTION:
            return {
                loading: false,
                favorites: [],
                error: action.payload.error,
            };

        default:
            break;
    }

    return state;
};
