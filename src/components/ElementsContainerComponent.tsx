import {ElementComponent} from "./ElementComponent";
import {SourceDataType} from "../tools/types";
import {useSelector} from "react-redux";

export const ElementsContainerComponent = () => {

    const sources = useSelector((state: any) => state.sources);

    return (
        <div className="main-body-lists-container">
            {sources.map((e: SourceDataType) => (
                <ElementComponent item={e} key={e.id} />
            ))}
        </div>
    );
};
