import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

const groupsApiSlice = createApi({
    reducerPath: "groupsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://mocki.io/v1/",
    }),
    endpoints(builder) {
        return {
            getGroups: builder.query<GroupContactsDto[], void>({
                query: () => ({
                    url: "1e0f07cb-08c9-4030-9389-bbff810df252",
                }),
            }),
        };
    },
});

export const { useGetGroupsQuery } = groupsApiSlice;

export const groupsMiddleware = groupsApiSlice.middleware;

export const groupsReducerPath = groupsApiSlice.reducerPath;

export default groupsApiSlice.reducer;
