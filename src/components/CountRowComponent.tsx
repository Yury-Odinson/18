export const CountRowComponent = () => {
    return (
        <div className="main-body-info-row-counter">
            <p className="main-body-info-row-counter__description">Количество записей</p>
            <input className="main-body-info-row-counter__counter" readOnly={true} value={5}/>
        </div>
    )
};
