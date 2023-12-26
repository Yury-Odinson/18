import {ElementsContainerComponent} from "./ElementsContainerComponent";
import {URLComponent} from "./URLComponent";
import {useContext} from "react";
import {SourceContext} from "../tools/store";

export const ListComponent = () => {

    const context = useContext(SourceContext);

    const setValueContext = (value: string) => {
        context.setValue(value);
        console.log(context.value)
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
