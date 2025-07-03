import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactDto } from "src/types/dto/ContactDto";

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

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        fetchContacts(state) {
            state.loading = true;
        },
        fetchContactsSuccess(state, action: PayloadAction<ContactDto[]>) {
            state.loading = false;
            state.contacts = action.payload;
            state.error = "";
        },
        fetchContactsError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchContacts, fetchContactsSuccess, fetchContactsError } =
    contactsSlice.actions;

export default contactsSlice.reducer;
