import {ListComponent} from "./ListComponent";
import {InfoComponent} from "./InfoComponent";

export const BodyComponent = () => {
    return (
        <div className="main-body">
            <ListComponent/>
            <InfoComponent/>
        </div>
    );
};
