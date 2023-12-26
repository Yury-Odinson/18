import {Dispatch, SetStateAction} from "react";

export type SourceDataType = {
    id: string,
    source: string
};

export type ContextValue = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>
};
