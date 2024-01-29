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
        setActive: (state, action) => {
            const selectedId = action.payload.id;
            state.forEach((e: SourceDataType) => {
                if (selectedId === e.id) {
                    e.isActive = !e.isActive;
                } else {
                    e.isActive = false;
                }
            });
            localStorage.setItem("sources", JSON.stringify(state));
        },
        removeSource: (state, action) => {
            const selectedId = action.payload.id;
            const filteredState = state.filter((e: SourceDataType) => {
                return e.id !== selectedId;
            })
            state.length = 0;
            state.push(...filteredState);
            localStorage.setItem("sources", JSON.stringify(state));
        }
    }
});

export const {actions, reducer: sourcesReducer} = sourcesSlice;
