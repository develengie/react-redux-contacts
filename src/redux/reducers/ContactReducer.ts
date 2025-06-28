import {
    FETCH_CONTACT_ACTION,
    FETCH_CONTACT_SUCCESS_ACTION,
    FETCH_CONTACT_ERROR_ACTION,
} from "../actions";
import { ContactDto } from "src/types/dto/ContactDto";
import { RootAction } from "../types";

interface ContactState {
    loading: boolean;
    contact: ContactDto | undefined;
    error: string;
}

const initialState: ContactState = {
    loading: false,
    contact: undefined,
    error: "",
};

export const contactReducer = (
    state = initialState,
    action: RootAction
): ContactState => {
    switch (action.type) {
        case FETCH_CONTACT_ACTION:
            return {
                loading: true,
                contact: undefined,
                error: "",
            };

        case FETCH_CONTACT_SUCCESS_ACTION:
            return {
                loading: false,
                contact: action.payload.contact,
                error: "",
            };

        case FETCH_CONTACT_ERROR_ACTION:
            return {
                loading: false,
                contact: undefined,
                error: action.payload.error,
            };

        default:
            break;
    }

    return state;
};
