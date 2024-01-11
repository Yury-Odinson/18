import {createSlice} from "@reduxjs/toolkit";

const initialState: string = "";

export const sourceNameSlice = createSlice({
    name: "sourceName",
    initialState,
    reducers: {
        addName: (state, action) => {
            return state = action.payload;
        }
    }
});

export const {actions, reducer: nameReducer} = sourceNameSlice;
