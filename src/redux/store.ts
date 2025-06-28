import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import {
    contactReducer,
    contactsReducer,
    favoritesReducer,
    groupReducer,
    groupsReducer,
} from "./reducers";

const rootReducer = combineReducers({
    contactsReducer,
    contactReducer,
    groupsReducer,
    groupReducer,
    favoritesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
