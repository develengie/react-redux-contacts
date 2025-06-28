import { combineReducers, createStore } from "redux";
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

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
