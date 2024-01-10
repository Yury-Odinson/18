import {createSlice} from "@reduxjs/toolkit";
import {SourceDataType} from "./types";

const initialState: SourceDataType[] = JSON.parse(localStorage.getItem("sources") || "[]") || [];

export const sourcesSlice = createSlice({
    name: "sources",
    initialState,
    reducers: {
        addSource: (state, action) => {
            state.push(action.payload);
            localStorage.setItem("sources", JSON.stringify(state));
        },
        remSource: (state, action) => {
            state.find(action.payload);
        }
    }
});

export const {actions, reducer} = sourcesSlice;
