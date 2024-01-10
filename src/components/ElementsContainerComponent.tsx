import {ElementComponent} from "./ElementComponent";
import {SourceDataType} from "../tools/types";
import {useSelector} from "react-redux";

export const ElementsContainerComponent = () => {

    const sources = useSelector((state: SourceDataType[]) => state);

    return (
        <div className="main-body-lists-container">
            {sources.map((e: SourceDataType) => (
                <ElementComponent source={e.source} key={e.id}/>
            ))}
        </div>
    );
};
