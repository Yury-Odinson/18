import {ElementComponent} from "./ElementComponent";
import {useEffect, useState} from "react";
import {SourceDataType} from "../tools/types";
import {sourcesData} from "../tools/store";

export const ElementsContainerComponent = () => {

    const [sources, setSources] = useState<SourceDataType[]>([]);

    useEffect(() => {
        setSources([...sourcesData]);
    }, [sourcesData]);

    // console.log(sources);
    return (
        <div className="main-body-lists-container">
            {sources.map((e: SourceDataType) => (
                <ElementComponent source={e.source} key={e.id}/>
            ))}
        </div>
    );
};
