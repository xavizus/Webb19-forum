import axios from "axios";
import User from "./user";

class Authentication {

    async login(email, password) {
        const AUTH_URL = `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_AUTH_PATH}`;
        const {data: jwt} = await axios.post(AUTH_URL, {email, password});
    }

    async getCountries() {
        const countries_URL = `${process.env.NEXT_PUBLIC_API_AUTH_PATH}api/v1/countries/`;

        await axios.get(countries_URL);
    }

    async createUser(userObject) {
        const createUser_URL = `${process.env.NEXT_PUBLIC_API_URL}api/v1/auth/users/`;
        if(userObject instanceof User) {
            return false;
        }

        await axios.post(createUser_URL, {
            email: userObject.email,
            password: userObject.password,
            firstName: userObject.firstName,
            lastName: userObject.lastName,
            country: userObject.country
        });
    }

    async getCurrentUser() {

    }
}

export default new Authentication();