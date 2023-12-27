export const ElementComponent = (sourceProps: { source: string }) => {

    return (
        <div className="main-body-lists-container__item">
            <button>{sourceProps.source}</button>
        </div>
    );
};
