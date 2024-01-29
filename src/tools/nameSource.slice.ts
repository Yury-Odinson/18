import {createSlice} from "@reduxjs/toolkit";

const initialState: string = "";

export const nameSourceSlice = createSlice({
    name: "name",
    initialState,
    reducers: {
        addName: (state, action) => {
            return state = action.payload;
        }
    }
});

export const {actions, reducer: nameReducer} = nameSourceSlice;
