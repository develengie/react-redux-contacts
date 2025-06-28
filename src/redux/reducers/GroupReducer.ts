import {
    FETCH_GROUP_ACTION,
    FETCH_GROUP_SUCCESS_ACTION,
    FETCH_GROUP_ERROR_ACTION,
} from "../actions";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { RootAction } from "../types";

interface GroupState {
    loading: boolean;
    group: GroupContactsDto | undefined;
    error: string;
}

const initialState: GroupState = {
    loading: false,
    group: undefined,
    error: "",
};

export const groupReducer = (
    state = initialState,
    action: RootAction
): GroupState => {
    switch (action.type) {
        case FETCH_GROUP_ACTION:
            return {
                loading: true,
                group: undefined,
                error: "",
            };

        case FETCH_GROUP_SUCCESS_ACTION:
            return {
                loading: false,
                group: action.payload.group,
                error: "",
            };

        case FETCH_GROUP_ERROR_ACTION:
            return {
                loading: false,
                group: undefined,
                error: action.payload.error,
            };

        default:
            break;
    }

    return state;
};
