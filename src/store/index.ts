import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { contactsReducer, favoritesReducer, groupsReducer } from "./slices";
import {
    contactsMiddleware,
    contactsReducerPath,
} from "./slices/ContactsSlice";
import { groupsMiddleware, groupsReducerPath } from "./slices/GroupsSlice";

const rootReducer = combineReducers({
    [contactsReducerPath]: contactsReducer,
    [groupsReducerPath]: groupsReducer,
    favoritesReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat([
            contactsMiddleware,
            groupsMiddleware,
        ]);
    },
});

export type RootState = ReturnType<typeof rootReducer>;
