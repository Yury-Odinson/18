import {ElementsContainerComponent} from "./ElementsContainerComponent";
import {URLComponent} from "./URLComponent";
import {store} from "../tools/store";
import {nameSourceSlice} from "../tools/nameSource.slice";

export const ListComponent = () => {

    const setValueContext = (value: string) => store.dispatch(nameSourceSlice.actions.addName(value));

    return (
        <div className="main-body-lists">
            <h2>Список источников данных</h2>
            <input type="text" className="main-body-lists__input" onChange={(e) => {
                setValueContext(e.target.value);
            }}/>
            <ElementsContainerComponent/>
            <URLComponent/>
        </div>
    );
};
