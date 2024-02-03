import {store} from "./store";
import {dataSlice} from "./data.slice";

export const requestData = async (url: string) => {
    const sourceURL = new URL(url);
    try {
        const response = await fetch(sourceURL);
        const result = await response.json();
        return store.dispatch(dataSlice.actions.setData(result));
    } catch (error) {
        console.error(error + ". Check URL");
    }
};
