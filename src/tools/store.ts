import {ContextSources, ContextValue, SourceDataType} from "./types";
import React from "react";

export const sourcesData: SourceDataType[] = JSON.parse(localStorage.getItem("sources") || "[]") || [];

export const getLocalStorage = () => JSON.parse(localStorage.getItem("sources") || "[]") || [];
export const setLocalStorage = (arr: SourceDataType[]) => localStorage.setItem("sources", JSON.stringify(arr));

export const SourceValueContext = React.createContext<ContextValue>({
    value: "",
    setValue: () => {
    }
});

export const SourceDataContext = React.createContext<ContextSources>({
    sources: [],
    setSources: () => {
    }
});
