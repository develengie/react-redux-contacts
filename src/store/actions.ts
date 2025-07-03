import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from ".";
import { ContactDto } from "src/types/dto/ContactDto";
import {
    fetchFavorites,
    fetchFavoritesError,
    fetchFavoritesSuccess,
} from "./slices/FavoritesSlice";

export const fetchFavoritesAction = (): ThunkAction<
    void,
    RootState,
    void,
    AnyAction
> => {
    return async (dispatch) => {
        try {
            dispatch(fetchFavorites());
            const response = await fetch(
                "https://mocki.io/v1/5457bc12-4212-43f1-8ca4-f41134fb56cb"
            );
            const data = (await response.json()) as ContactDto[];
            const favorites = [data[0].id, data[1].id, data[2].id, data[3].id];
            dispatch(fetchFavoritesSuccess(favorites));
        } catch (e) {
            const error = e as Error;
            dispatch(fetchFavoritesError(error.message));
        }
    };
};
