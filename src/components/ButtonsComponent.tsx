import {requestData} from "../tools/requestsData";

export const ButtonsComponent = () => {

    const handlerLoad = () => {
        return requestData("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
    }

    return (
        <div className="main-menu-buttons">
            <button className="main-menu-buttons__item">Загрузить из файла</button>
            <button className="main-menu-buttons__item">Загрузить</button>
            <button className="main-menu-buttons__item">Сохранить</button>
            <button className="main-menu-buttons__item" onClick={() => handlerLoad()}>Рассчитать</button>
        </div>
    )
};
