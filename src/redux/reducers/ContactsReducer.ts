import {
    FETCH_CONTACTS_ACTION,
    FETCH_CONTACTS_SUCCESS_ACTION,
    FETCH_CONTACTS_ERROR_ACTION,
} from "../actions";
import { ContactDto } from "src/types/dto/ContactDto";
import { RootAction } from "../types";

interface ContactsState {
    loading: boolean;
    contacts: ContactDto[];
    error: string;
}

const initialState: ContactsState = {
    loading: false,
    contacts: [],
    error: "",
};

export const contactsReducer = (
    state = initialState,
    action: RootAction
): ContactsState => {
    switch (action.type) {
        case FETCH_CONTACTS_ACTION:
            return {
                loading: true,
                contacts: [],
                error: "",
            };

        case FETCH_CONTACTS_SUCCESS_ACTION:
            return {
                loading: false,
                contacts: action.payload.contacts,
                error: "",
            };

        case FETCH_CONTACTS_ERROR_ACTION:
            return {
                loading: false,
                contacts: [],
                error: action.payload.error,
            };

        default:
            break;
    }

    return state;
};
