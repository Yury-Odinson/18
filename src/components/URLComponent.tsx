import {SourceDataType} from "../tools/types";
import {store} from "../tools/store";
import {sourcesSlice} from "../tools/sources.slice";
import {useSelector} from "react-redux";

export const URLComponent = () => {

    const nameSource = useSelector((state: any) => state.name);
    const sources = useSelector((state: any) => state.sources);

    const maxId = sources.reduce((max:any, obj: any) => (obj.id > max ? obj.id : max), 0);


    // console.log(maxId)

    const addSourceItem = () => {
        const item: SourceDataType = {
            id: maxId + 1,
            source: nameSource,
            isActive: false
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
