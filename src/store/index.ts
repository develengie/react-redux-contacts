import { configureStore, Tuple } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
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
    middleware: () => new Tuple(contactsMiddleware, groupsMiddleware, thunk),
});

export type RootState = ReturnType<typeof rootReducer>;
