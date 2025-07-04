import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import contactsReducer, {
    contactsMiddleware,
    contactsReducerPath,
} from "./contacts";
import groupsReducer, { groupsMiddleware, groupsReducerPath } from "./groups";
import favoritesReducer from "./favorites";

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
