import {ElementsContainerComponent} from "./ElementsContainerComponent";
import {URLComponent} from "./URLComponent";

export const ListComponent = () => {
    return (
        <div className="main-body-lists">
            <h2>Список источников данных</h2>
            <input type="text" className="main-body-lists__input"/>
            <ElementsContainerComponent/>
            <URLComponent/>
        </div>
    )
};
