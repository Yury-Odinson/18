export const requestData = async (url: string) => {
    const sourceURL = new URL(url);
    try {
        const response = await fetch(sourceURL);
        const result = await response.json();
        return console.log(result);
    } catch (error) {
        console.error(error + ". Check URL");
    }
};
