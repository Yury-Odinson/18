import {configureStore} from "@reduxjs/toolkit";
import {sourcesReducer} from "./sources.slice";
import {nameReducer} from "./nameSource.slice";
import {urlReducer} from "./URLSource.slice";

export const store = configureStore({
    reducer: {
        sources: sourcesReducer,
        name: nameReducer,
        url: urlReducer
    },
    devTools: true
});
