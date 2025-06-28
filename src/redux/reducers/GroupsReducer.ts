import {
    FETCH_GROUPS_ACTION,
    FETCH_GROUPS_SUCCESS_ACTION,
    FETCH_GROUPS_ERROR_ACTION,
} from "../actions";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { RootAction } from "../types";

interface GroupsState {
    loading: boolean;
    groups: GroupContactsDto[];
    error: string;
}

const initialState: GroupsState = {
    loading: false,
    groups: [],
    error: "",
};

export const groupsReducer = (
    state = initialState,
    action: RootAction
): GroupsState => {
    switch (action.type) {
        case FETCH_GROUPS_ACTION:
            return {
                loading: true,
                groups: [],
                error: "",
            };

        case FETCH_GROUPS_SUCCESS_ACTION:
            return {
                loading: false,
                groups: action.payload.groups,
                error: "",
            };

        case FETCH_GROUPS_ERROR_ACTION:
            return {
                loading: false,
                groups: [],
                error: action.payload.error,
            };

        default:
            break;
    }

    return state;
};
