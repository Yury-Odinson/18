import {ElementComponent} from "./ElementComponent";
import {useContext, useEffect, useState} from "react";
import {getLocalStorage, SourceDataContext} from "../tools/store";
import {SourceDataType} from "../tools/types";

export const ElementsContainerComponent = () => {

    const [sources, setSources] = useState<SourceDataType[]>([]);

    const contextSources = useContext(SourceDataContext);

    useEffect(() => {
        const data = getLocalStorage();
        setSources(data);
        contextSources.setSources(data);
    }, []);

    return (
        <div className="main-body-lists-container">
            {sources.map((e: SourceDataType) => (
                <ElementComponent source={e.source} key={e.id}/>
            ))}
        </div>
    );
};
