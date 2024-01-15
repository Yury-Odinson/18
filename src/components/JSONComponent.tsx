export const JSONComponent = (contentProps: { data: string }) => {
    return (
        <textarea className="main-body-info__content" value={contentProps.data}></textarea>
    )
};
