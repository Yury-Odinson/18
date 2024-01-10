import {ElementsContainerComponent} from "./ElementsContainerComponent";
import {URLComponent} from "./URLComponent";
import {useContext} from "react";
import {SourceContext} from "../tools/store.old";

export const ListComponent = () => {

    const contextValue = useContext(SourceContext);

    const setValueContext = (value: string) => {

        contextValue.setValue(value);
    };

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
