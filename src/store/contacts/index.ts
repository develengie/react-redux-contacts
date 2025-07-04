import { contactsApiSlice } from "./api";

export const { useGetContactsQuery } = contactsApiSlice;
export const contactsMiddleware = contactsApiSlice.middleware;
export const contactsReducerPath = contactsApiSlice.reducerPath;
export default contactsApiSlice.reducer;
