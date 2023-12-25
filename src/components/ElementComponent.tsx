import {useEffect, useState} from "react";

export const ElementComponent = (sourceProps: { source: string }) => {

    const [source, setSource] = useState<string>("");

    useEffect(() => setSource(sourceProps.source), []);

    return (
        <div className="main-body-lists-container__item">
            <button>{source}</button>
        </div>
    )
};
