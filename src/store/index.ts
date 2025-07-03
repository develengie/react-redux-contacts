import { configureStore, Tuple } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { contactsReducer, favoritesReducer, groupsReducer } from "./reducers";

const rootReducer = combineReducers({
    contactsReducer,
    groupsReducer,
    favoritesReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: () => new Tuple(thunk),
});

export type RootState = ReturnType<typeof rootReducer>;
