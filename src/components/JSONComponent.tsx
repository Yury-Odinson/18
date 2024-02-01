export const JSONComponent = (contentProps: { data: string }) => {
    return (
        <textarea className="main-body-info__content" defaultValue={contentProps.data}></textarea>
    )
};
