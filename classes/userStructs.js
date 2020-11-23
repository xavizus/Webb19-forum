export class User {
    constructor(email, password, country, firstName, lastName) {
        this.email = email;
        this.password = password;
        this.country = country;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

export class Credentials {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}