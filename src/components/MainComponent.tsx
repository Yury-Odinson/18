import {MenuComponent} from "./MenuComponent";
import {BodyComponent} from "./BodyComponent";

export const MainComponent = () => {
    return (
        <div className="main">
            <MenuComponent/>
            <BodyComponent/>
        </div>
    )
};
