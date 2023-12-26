import {ContextValue, SourceDataType} from "./types";
import React from "react";

export const sourcesData: SourceDataType[] = JSON.parse(localStorage.getItem("sources") || "[]") || [];

export const SourceContext = React.createContext<ContextValue>({
    value: "",
    setValue: () => { }
});
