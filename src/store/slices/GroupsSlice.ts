import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

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

const groupsSlice = createSlice({
    name: "groups",
    initialState,
    reducers: {
        fetchGroups(state) {
            state.loading = true;
        },
        fetchGroupsSuccess(state, action: PayloadAction<GroupContactsDto[]>) {
            state.loading = false;
            state.groups = action.payload;
            state.error = "";
        },
        fetchGroupsError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchGroups, fetchGroupsSuccess, fetchGroupsError } =
    groupsSlice.actions;

export default groupsSlice.reducer;
