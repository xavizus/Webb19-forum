
const amount = {
    second: 1000,
    minute: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
    month: 1000 * 60 * 60 * 24 * 30,
    year: 1000 * 60 * 60 * 24 * 365
}

export function sortArrayByDate(array, keyToUse) {
    return array.sort((a, b) => new Date(b[keyToUse]) - new Date(a[keyToUse]))
}

export function getLatestDate(dateA, dateB) {
    return (new Date(dateA) > new Date(dateB)) ? dateB : dateA;
}

export function clearMessage(setFunction, timeBeforeClearInSeconds = 10) {
    setTimeout(() => {
        setFunction(null);
    }, timeBeforeClearInSeconds*1000);
}


function addLeadingZeroIfThereIsOnlyOneCharacter(string) {
    return (string.toString().length === 1) ? `0${string}` : string;
}

export function getAmountAgoFromDate(date) {
    const nowDate = new Date();
    const diffTime = Math.abs(nowDate - date);
    let diffString;
    if(diffTime < amount.second)
        diffString = `${diffTime} milliseconds`;
    else if (diffTime > amount.second && diffTime < amount.minute)
        diffString = `${Math.ceil(diffTime / amount.second)} seconds`;
    else if (diffTime > amount.minute && diffTime < amount.hour)
        diffString = `${Math.ceil(diffTime / amount.minute)} minutes`;
    else if (diffTime > amount.hour && diffTime < amount.day)
        diffString = `${Math.ceil(diffTime / amount.hour)} hours`;
    else if (diffTime > amount.day && diffTime < amount.month)
        diffString = `${Math.ceil(diffTime / amount.day)} days`;
    else if (diffTime > amount.month && diffTime < amount.year){
        diffString = `${Math.ceil(diffTime / amount.month)} months`;
    } else {
        diffString = `${Math.ceil(diffTime / amount.year)} years`;
    }
    return diffString+' ago';
}

export function formatDate(date, format='yyyy-mm-dd HH:MM') {
    date = new Date(date);
    const formatConversion = {
        'YY': date.getFullYear().toString().substr(2,4),
        'yyyy': date.getFullYear(),
        'mm': addLeadingZeroIfThereIsOnlyOneCharacter(date.getMonth()),
        'dd': addLeadingZeroIfThereIsOnlyOneCharacter(date.getDate()),
        'MM': addLeadingZeroIfThereIsOnlyOneCharacter(date.getMinutes()),
        'ss': addLeadingZeroIfThereIsOnlyOneCharacter(date.getSeconds()),
        'HH': addLeadingZeroIfThereIsOnlyOneCharacter(date.getHours()),
    }
    Object.entries(formatConversion).map(element => {
        const key = element[0];
        const action = element[1];
        format = format.replace(key, action);
    });
    return format;
}