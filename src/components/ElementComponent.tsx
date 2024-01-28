import {useEffect, useState} from "react";

export const ElementComponent = (sourceProps: { source: string, id: string }) => {

    const [isActive, setIsActive] = useState(false);
    const [className, setClassName] = useState("");

    // useEffect(() => {
    //     if (sourceProps.isActive) {
    //         setIsActive(true);
    //     } else {
    //         setIsActive(false);
    //     }
    // }, []);

console.log(sourceProps.source);
    const handlerActive = () => {
        setIsActive(!isActive);
        if (isActive) {
            setClassName(" activeItem");
        } else setClassName("");
    }

    return (
        <div className={"main-body-lists-container__item"} id={sourceProps.id} onClick={handlerActive}>
            <button className="sourceItem">{sourceProps.source}</button>
        </div>
    );
};
