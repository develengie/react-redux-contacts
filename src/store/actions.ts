import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from ".";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import {
    fetchContacts,
    fetchContactsError,
    fetchContactsSuccess,
} from "./slices/ContactsSlice";
import {
    fetchGroups,
    fetchGroupsError,
    fetchGroupsSuccess,
} from "./slices/GroupsSlice";
import {
    fetchFavorites,
    fetchFavoritesError,
    fetchFavoritesSuccess,
} from "./slices/FavoritesSlice";

export const fetchContactsAction = (): ThunkAction<
    void,
    RootState,
    void,
    AnyAction
> => {
    return async (dispatch) => {
        try {
            dispatch(fetchContacts());
            const response = await fetch(
                "https://mocki.io/v1/5457bc12-4212-43f1-8ca4-f41134fb56cb"
            );
            const contacts = (await response.json()) as ContactDto[];
            dispatch(fetchContactsSuccess(contacts));
        } catch (e) {
            const error = e as Error;
            dispatch(fetchContactsError(error.message));
        }
    };
};

export const fetchGroupsAction = (): ThunkAction<
    void,
    RootState,
    void,
    AnyAction
> => {
    return async (dispatch) => {
        try {
            dispatch(fetchGroups());
            const response = await fetch(
                "https://mocki.io/v1/fe7c703f-9521-420b-8f5b-9c69d73b79e2"
            );
            const groups = (await response.json()) as GroupContactsDto[];
            dispatch(fetchGroupsSuccess(groups));
        } catch (e) {
            const error = e as Error;
            dispatch(fetchGroupsError(error.message));
        }
    };
};

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
