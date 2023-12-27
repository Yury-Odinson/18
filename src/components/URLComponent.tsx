import {useContext} from "react";
import {setLocalStorage, SourceValueContext, sourcesData, SourceDataContext} from "../tools/store";
import {SourceDataType} from "../tools/types";

export const URLComponent = () => {

    const contextValue = useContext(SourceValueContext);
    const contextData = useContext(SourceDataContext);

    const addSourceItem = () => {
        const item: SourceDataType = {
            id: Date.now().toString(),
            source: contextValue.value
        };

        sourcesData.push(item);
        contextData.setSources(sourcesData);
        setLocalStorage(sourcesData);
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
