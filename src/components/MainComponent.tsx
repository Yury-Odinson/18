import {MenuComponent} from "./MenuComponent";
import {BodyComponent} from "./BodyComponent";
import {SourceContext} from "../tools/store.old";
import {useState} from "react";

export const MainComponent = () => {

    const [value, setValue] = useState<string>("");

    return (
        <div className="main">
            <SourceContext.Provider value={{value, setValue}}>
                <MenuComponent/>
                <BodyComponent/>
            </SourceContext.Provider>
        </div>
    );
};
