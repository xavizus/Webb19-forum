export default class Headers {
    static getPublicHeaders() {
        return {
            "Content-Type": "application/json"
        }
    }

    static getPrivateHeaders(token) {
        return {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
}