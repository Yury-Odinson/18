import {store} from "../tools/store";
import {sourceNameSlice} from "../tools/sourceName.slice";
import {useState} from "react";

export const ModalAddSource = (modalProps: { toggle: any }) => {

    const [isModalVisible, setIsModalVisible] = useState<boolean>(true);

    const handleCloseModal = () => {
        setIsModalVisible(false);
        // Закрытие модального окна вызовом функции из родительского компонента
        modalProps.toggle(false);
    };
    const setValueContext = (value: string) => store.dispatch(sourceNameSlice.actions.addName(value));

    return (
        <>
            <div className="background-modal" onClick={() => handleCloseModal()}/>
            <div className="modal">
                <label className="modal-label">
                    <input type="text" placeholder="Имя источника"/>
                </label>
                <label className="modal-label">
                    <input type="text" placeholder="Путь к источнику" onChange={(e) => {
                        setValueContext(e.target.value);
                    }}/>
                </label>

                <div className="modal-buttons">
                    <button>Отменить</button>
                    <button>Сохранить</button>
                </div>
            </div>
        </>

    )
};
