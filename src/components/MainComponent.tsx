import {MenuComponent} from "./MenuComponent";
import {BodyComponent} from "./BodyComponent";
import {useState} from "react";
import {SourceContext, sourcesData} from "../tools/store";

export const MainComponent = () => {

    const [value, setValue] = useState<string>("");

    // console.log(sourcesData);

    return (
        <div className="main">
            <SourceContext.Provider value={{value, setValue}}>
                <MenuComponent/>
                <BodyComponent/>
            </SourceContext.Provider>
        </div>
    );
};
