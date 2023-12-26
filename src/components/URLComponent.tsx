import {useContext} from "react";
import {getLocalStorage, setLocalStorage, SourceContext} from "../tools/store";
import {SourceDataType} from "../tools/types";

export const URLComponent = () => {

    const context = useContext(SourceContext);

    const addSourceItem = () => {
        const sourcesData = getLocalStorage();
        const item: SourceDataType = {
            id: Date.now().toString(),
            source: context.value
        };
        sourcesData.push(item);
        return setLocalStorage(sourcesData);
    };

    return (
        <div className="main-body-lists-control">
            <button className="main-body-lists-control__add" onClick={() => {
                addSourceItem()
            }}>Добавить источник</button>
            <button className="main-body-lists-control__del">Удалить источник</button>
            <button className="main-body-lists-control__edit">Изменить источник</button>
        </div>
    );
};
