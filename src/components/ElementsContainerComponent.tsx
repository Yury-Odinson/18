import {ElementComponent} from "./ElementComponent";
import {SourceDataType} from "../tools/types";
import {useSelector} from "react-redux";

export const ElementsContainerComponent = () => {

    const sources = useSelector((state: any) => state.sources);

    return (
        <div className="main-body-lists-container">
            {sources.map((e: SourceDataType) => (
                <ElementComponent source={e.source} id={e.id} key={e.id}/>
            ))}
        </div>
    );
};
