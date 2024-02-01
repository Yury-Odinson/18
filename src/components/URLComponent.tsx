import {SourceDataType} from "../tools/types";
import {store} from "../tools/store";
import {sourcesSlice} from "../tools/sources.slice";
import {useSelector} from "react-redux";
import {Modal} from "./Modal";
import {useState} from "react";

export const URLComponent = () => {

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [typeModal, setTypeModal] = useState<string>("");

    const toggleModal = (type: string) => {
        setIsModalVisible(!isModalVisible);
        setTypeModal(type);
    };
    const selectedItem = useSelector((state: any) => state.sources).find((e: SourceDataType) => e.isActive);

    const removeSourceItem = () => store.dispatch(sourcesSlice.actions.removeSource(selectedItem));

    return (
        <div className="main-body-lists-control">
            <button className="main-body-lists-control__add" onClick={() => {
                toggleModal("add");
            }}>Добавить источник
            </button>
            <button className="main-body-lists-control__del" onClick={() => removeSourceItem()}>Удалить источник
            </button>
            <button className="main-body-lists-control__edit" onClick={() => {
                toggleModal("edit");
            }}>Изменить источник</button>
            {
                isModalVisible && <Modal type={typeModal} toggle={toggleModal}/>
            }
        </div>
    );
};
