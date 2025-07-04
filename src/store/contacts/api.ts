import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ContactDto } from "src/types/dto/ContactDto";

export const contactsApiSlice = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://mocki.io/v1/",
    }),
    endpoints(builder) {
        return {
            getContacts: builder.query<ContactDto[], void>({
                query: () => ({
                    url: "a8772f55-89c4-4a24-8b89-976608ef2783",
                }),
            }),
        };
    },
});
