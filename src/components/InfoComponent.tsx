import {CountRowComponent} from "./CountRowComponent";
import {CountColumnComponent} from "./CountColumnComponent";
import {JSONComponent} from "./JSONComponent";

export const InfoComponent = () => {
    return (
        <div className="main-body-info">
            <h3>Информация</h3>
            <CountRowComponent/>
            <CountColumnComponent/>
            <JSONComponent/>
        </div>
    )
};
