
export function clearMessage(setFunction, timeBeforeClearInSeconds = 10) {
    setTimeout(() => {
        setFunction(null);
    }, timeBeforeClearInSeconds*1000);
}