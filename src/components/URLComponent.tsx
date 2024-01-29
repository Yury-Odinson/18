import {SourceDataType} from "../tools/types";
import {store} from "../tools/store";
import {sourcesSlice} from "../tools/sources.slice";
import {useSelector} from "react-redux";
import {ModalAddSource} from "./ModalAddSource";
import {useState} from "react";

export const URLComponent = () => {

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const toggleModal = () => setIsModalVisible(!isModalVisible);
    const selectedItem = useSelector((state: any) => state.sources).find((e: SourceDataType) => e.isActive);

    const removeSourceItem = () => store.dispatch(sourcesSlice.actions.removeSource(selectedItem));

    return (
        <div className="main-body-lists-control">
            <button className="main-body-lists-control__add" onClick={() => {
                toggleModal();
            }}>Добавить источник
            </button>
            <button className="main-body-lists-control__del" onClick={() => removeSourceItem()}>Удалить источник
            </button>
            <button className="main-body-lists-control__edit">Изменить источник</button>
            {isModalVisible && <ModalAddSource toggle={toggleModal}/>}
        </div>
    );
};
