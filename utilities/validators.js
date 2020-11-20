export function isPromise(Object) {
    return !!Object && typeof Object.then == 'function';
}

export function isEmail(string) {
    const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    return emailRegex.test(string);
}

export function isSecurePassword(string) {
    let regex = ''
    switch(process.env.NEXT_PUBLIC_API_PASSWORD_COMPLEXITY.toLowerCase()) {
        case 'high':
            regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])(.{8,})/;
            break;
        case 'medium':
            regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(.{8,})/;
            break;
        case 'low':
            regex = /.{6,}/;
        case 'none':
        default:
            regex = /.+/;
    }
    return regex.test(string);
}