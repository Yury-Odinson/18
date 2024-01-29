import {SourceDataType} from "../tools/types";
import {store} from "../tools/store";
import {sourcesSlice} from "../tools/sources.slice";
import {useSelector} from "react-redux";
import {ModalAddSource} from "./ModalAddSource";
import {useState} from "react";

export const URLComponent = () => {

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const toggleModal = () => setIsModalVisible(!isModalVisible);

    const nameSource = useSelector((state: any) => state.name);
    const sources = useSelector((state: any) => state.sources);

    const maxId = sources.reduce((max: any, obj: any) => (obj.id > max ? obj.id : max), 0);

    const selectedItem = useSelector((state: any) => state.sources).find((e: SourceDataType) => e.isActive);


    const addSourceItem = () => {
        const item: SourceDataType = {
            id: maxId + 1,
            name: "",
            source: nameSource,
            isActive: false
        };
        store.dispatch(sourcesSlice.actions.addSource(item));
    };

    const removeSourceItem = () => store.dispatch(sourcesSlice.actions.removeSource(selectedItem));

    return (
        <div className="main-body-lists-control">
            <button className="main-body-lists-control__add" onClick={() => {
                // addSourceItem()
                toggleModal();
            }}>Добавить источник
            </button>
            <button className="main-body-lists-control__del" onClick={() => removeSourceItem()}>Удалить источник
            </button>
            <button className="main-body-lists-control__edit">Изменить источник</button>
            {isModalVisible && <ModalAddSource toggle={() => toggleModal}/>}
        </div>
    );
};
