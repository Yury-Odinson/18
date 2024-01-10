import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "./sources.slice";

export const store = configureStore({
    reducer,
    devTools: true
});


