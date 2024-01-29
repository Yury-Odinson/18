import {store} from "../tools/store";
import {nameSourceSlice} from "../tools/nameSource.slice";
import {useSelector} from "react-redux";
import {SourceDataType} from "../tools/types";
import {sourcesSlice} from "../tools/sources.slice";
import {URLSourceSlice} from "../tools/URLSource.slice";

export const ModalAddSource = (modalProps: { toggle: any }) => {

    const handleCloseModal = () => modalProps.toggle(false);

    const setSourceURL = (value: string) => store.dispatch(URLSourceSlice.actions.addURL(value));
    const setSourceName = (value: string) => store.dispatch(nameSourceSlice.actions.addName(value));

    const nameSource = useSelector((state: any) => state.name)
    const URLSource = useSelector((state: any) => state.url);
    const sources = useSelector((state: any) => state.sources);

    const maxId = sources.reduce((max: any, obj: any) => (obj.id > max ? obj.id : max), 0);

    const addSourceItem = () => {
        const item: SourceDataType = {
            id: maxId + 1,
            name: nameSource,
            source: URLSource,
            isActive: false
        };
        store.dispatch(sourcesSlice.actions.addSource(item));
        handleCloseModal();
    };

    return (
        <>
            <div className="background-modal" onClick={() => handleCloseModal()}/>
            <div className="modal">
                <label className="modal-label">
                    <input type="text" placeholder="Имя источника" onChange={(e): void => {
                        setSourceName((e.target.value));
                    }}/>
                </label>
                <label className="modal-label">
                    <input type="text" placeholder="Путь к источнику" onChange={(e) => {
                        setSourceURL(e.target.value);
                    }}/>
                </label>

                <div className="modal-buttons">
                    <button onClick={() => handleCloseModal()}>Отменить</button>
                    <button onClick={() => addSourceItem()}>Сохранить</button>
                </div>
            </div>
        </>
    )
};
