import {ElementComponent} from "./ElementComponent";
import {useEffect, useState} from "react";
import {sourcesData} from "../tools/store";
import {SourceDataType} from "../tools/types";

export const ElementsContainerComponent = () => {

    const [sourceData, setSourceData] = useState<SourceDataType[]>([]);

    useEffect(() => {
        setSourceData(sourcesData);
    }, []);

    console.log(sourceData);

    return (
        <div className="main-body-lists-container">
            <ElementComponent source={"wef1r"} key={1}/>
        </div>
    )
};
