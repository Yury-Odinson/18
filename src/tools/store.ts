import {configureStore} from "@reduxjs/toolkit";
import {sourcesReducer} from "./sources.slice";
import {nameReducer} from "./sourceName.slice";

export const store = configureStore({
    reducer: {
        sources: sourcesReducer,
        name: nameReducer
    },
    devTools: true
});
