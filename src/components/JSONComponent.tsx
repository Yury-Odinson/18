import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import stringify from "json-stringify-pretty-compact";

export const JSONComponent = () => {

    const [data, setData] = useState([]);

    const loadingData = useSelector((state: any) => state.data);

    useEffect(() => {
        setData(loadingData)
    }, [loadingData]);

    const result = stringify(data[0]);

    return (
        <textarea className="main-body-info__content" defaultValue={""} value={result} readOnly={true}></textarea>
    )
};
