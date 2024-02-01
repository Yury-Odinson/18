import {createSlice} from "@reduxjs/toolkit";

const initialState: string = "";

export const URLSourceSlice = createSlice({
    name: "url",
    initialState,
    reducers: {
        addURL: (state, action) => {
            return state = action.payload;
        }
    }
});

export const {actions, reducer: urlReducer} = URLSourceSlice;
