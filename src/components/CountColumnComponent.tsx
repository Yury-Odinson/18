export const CountColumnComponent = () => {
    return (
        <div className="main-body-info-row-counter">
            <p className="main-body-info-column-counter__description">Количество полей</p>
            <input className="main-body-info-column-counter__counter" readOnly={true} value={8}/>
        </div>
    )
};
