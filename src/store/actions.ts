import { ThunkAction } from "redux-thunk";
import { RootState } from ".";
import { ProjectActions } from "./types";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const FETCH_CONTACTS_ACTION = "FETCH_CONTACTS_ACTION";
export const FETCH_CONTACTS_SUCCESS_ACTION = "FETCH_CONTACTS_SUCCESS_ACTION";
export const FETCH_CONTACTS_ERROR_ACTION = "FETCH_CONTACTS_ERROR_ACTION";

export const FETCH_GROUPS_ACTION = "FETCH_GROUPS_ACTION";
export const FETCH_GROUPS_SUCCESS_ACTION = "FETCH_GROUPS_SUCCESS_ACTION";
export const FETCH_GROUPS_ERROR_ACTION = "FETCH_GROUPS_ERROR_ACTION";

export const FETCH_FAVORITES_ACTION = "FETCH_FAVORITES_ACTION";
export const FETCH_FAVORITES_SUCCESS_ACTION = "FETCH_FAVORITES_SUCCESS_ACTION";
export const FETCH_FAVORITES_ERROR_ACTION = "FETCH_FAVORITES_ERROR_ACTION";

export const fetchContactsAction = (): ThunkAction<
    void,
    RootState,
    void,
    ProjectActions
> => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_CONTACTS_ACTION });
            const response = await fetch(
                "https://mocki.io/v1/5457bc12-4212-43f1-8ca4-f41134fb56cb"
            );
            const contacts = (await response.json()) as ContactDto[];
            dispatch({
                type: FETCH_CONTACTS_SUCCESS_ACTION,
                payload: { contacts },
            });
        } catch (e) {
            const error = e as Error;
            dispatch({
                type: FETCH_CONTACTS_ERROR_ACTION,
                payload: {
                    error: error.message,
                },
            });
        }
    };
};

export const fetchGroupsAction = (): ThunkAction<
    void,
    RootState,
    void,
    ProjectActions
> => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_GROUPS_ACTION });
            const response = await fetch(
                "https://mocki.io/v1/fe7c703f-9521-420b-8f5b-9c69d73b79e2"
            );
            const groups = (await response.json()) as GroupContactsDto[];
            dispatch({
                type: FETCH_GROUPS_SUCCESS_ACTION,
                payload: { groups },
            });
        } catch (e) {
            const error = e as Error;
            dispatch({
                type: FETCH_GROUPS_ERROR_ACTION,
                payload: {
                    error: error.message,
                },
            });
        }
    };
};

export const fetchFavoritesAction = (): ThunkAction<
    void,
    RootState,
    void,
    ProjectActions
> => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_FAVORITES_ACTION });
            const response = await fetch(
                "https://mocki.io/v1/5457bc12-4212-43f1-8ca4-f41134fb56cb"
            );
            const data = (await response.json()) as ContactDto[];
            const favorites = [data[0].id, data[1].id, data[2].id, data[3].id];
            dispatch({
                type: FETCH_FAVORITES_SUCCESS_ACTION,
                payload: { favorites },
            });
        } catch (e) {
            const error = e as Error;
            dispatch({
                type: FETCH_FAVORITES_ERROR_ACTION,
                payload: {
                    error: error.message,
                },
            });
        }
    };
};
