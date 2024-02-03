import {createSlice} from "@reduxjs/toolkit";

const initialState: any = [];

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.length = 0;
            state.push(action.payload);
        }
    }
});

export const {actions, reducer: setData} = dataSlice;
