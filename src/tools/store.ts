import {SourceDataType} from "./types";

export const sourcesData: SourceDataType[] = JSON.parse(localStorage.getItem("sources") || "[]") || [];
