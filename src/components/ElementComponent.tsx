import {useEffect, useState} from "react";
import {SourceDataType} from "../tools/types";
import {store} from "../tools/store";
import {sourcesSlice} from "../tools/sources.slice";

export const ElementComponent = (sourceProps: { item: SourceDataType }) => {

    const [isActive, setIsActive] = useState(sourceProps.item.isActive);

    // console.log(sourceProps.item.source);

    useEffect(() => {
        setIsActive(sourceProps.item.isActive);
    }, [sourceProps.item.isActive]);

    const handlerActive = () => store.dispatch(sourcesSlice.actions.setActive(sourceProps.item));

    const classNames = `main-body-lists-container__item${isActive ? " activeItem" : ""}`;

    return (
        <div className={classNames} id={sourceProps.item.id} onClick={handlerActive}>
            <button className="sourceItem">{sourceProps.item.source}</button>
        </div>
    );
};
