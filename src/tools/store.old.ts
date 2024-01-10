import {ContextValue, SourceDataType} from "./types";
import React from "react";

export const sourcesData: SourceDataType[] = JSON.parse(localStorage.getItem("sources") || "[]") || [];

export const getLocalStorage = () => JSON.parse(localStorage.getItem("sources") || "[]") || [];
export const setLocalStorage = (arr: SourceDataType[]) => localStorage.setItem("sources", JSON.stringify(arr));

export const SourceContext = React.createContext<ContextValue>({
    value: "",
    setValue: () => {
    }
});
