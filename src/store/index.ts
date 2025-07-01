import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { contactsReducer, favoritesReducer, groupsReducer } from "./reducers";

const rootReducer = combineReducers({
    contactsReducer,
    groupsReducer,
    favoritesReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
