import {useContext} from "react";
import {SourceDataType} from "../tools/types";
import {store} from "../tools/store";
import {sourcesSlice} from "../tools/sources.slice";
import {SourceContext} from "../tools/store.old";

export const URLComponent = () => {

    const contextValue = useContext(SourceContext);

    const addSourceItem = () => {
        const item: SourceDataType = {
            id: Date.now().toString(),
            source: contextValue.value
        };

        store.dispatch(sourcesSlice.actions.addSource(item));

    };

    return (
        <div className="main-body-lists-control">
            <button className="main-body-lists-control__add" onClick={() => {
                addSourceItem()
            }}>Добавить источник
            </button>
            <button className="main-body-lists-control__del">Удалить источник</button>
            <button className="main-body-lists-control__edit">Изменить источник</button>
        </div>
    );
};
