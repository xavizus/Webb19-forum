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

export class Reply {
    constructor(title, content, parentId) {
        this.title = title;
        this.content = content;
        this.parent = parentId;
    }
}

export class Post {
    constructor(title, content, category) {
        this.title = title;
        this.content = content;
        this.category = category;
    }
}