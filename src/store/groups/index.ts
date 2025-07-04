import { groupsApiSlice } from "./api";

export const { useGetGroupsQuery } = groupsApiSlice;
export const groupsMiddleware = groupsApiSlice.middleware;
export const groupsReducerPath = groupsApiSlice.reducerPath;
export default groupsApiSlice.reducer;
