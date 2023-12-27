import {MenuComponent} from "./MenuComponent";
import {BodyComponent} from "./BodyComponent";
import {useState} from "react";
import {SourceDataContext, sourcesData, SourceValueContext} from "../tools/store";
import {SourceDataType} from "../tools/types";

export const MainComponent = () => {

    const [value, setValue] = useState<string>("");
    const [sources, setSources] = useState<SourceDataType[]>(sourcesData);

    return (
        <div className="main">
            <SourceValueContext.Provider value={{value, setValue}}>
                <SourceDataContext.Provider value={{sources, setSources}}>
                    <MenuComponent/>
                    <BodyComponent/>
                </SourceDataContext.Provider>
            </SourceValueContext.Provider>
        </div>
    );
};
