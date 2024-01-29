import {requestData} from "../tools/requestsData";
import {store} from "../tools/store";
import {sourcesSlice} from "../tools/sources.slice";

export const ButtonsComponent = () => {

    const handlerLoad = () => {
        return requestData("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
    }

    const handlerSaveSources = () => store.dispatch(sourcesSlice.actions.saveSources);

    return (
        <div className="main-menu-buttons">
            <button className="main-menu-buttons__item">Загрузить из файла</button>
            <button className="main-menu-buttons__item">Загрузить</button>
            <button className="main-menu-buttons__item" onClick={() => handlerSaveSources()}>Сохранить</button>
            <button className="main-menu-buttons__item" onClick={() => handlerLoad()}>Рассчитать</button>
        </div>
    )
};
