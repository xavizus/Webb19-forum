import axios from "axios";
import {User, Credentials} from "./userStructs";

class UserKit {

    getPublicHeaders() {
        return {
            "Content-Type": "application/json"
        }
    }

    getPrivateHeaders(token=null) {
        const TOKEN = token ? token : this.getToken();
        return {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${TOKEN}`
        }
    }

    checkTokenValidity(token = null) {
        if(!token) {
            token = this.getToken();
        }
        if(!token) {
            return false;
        }
        const tokenData = this.decode64(token.split('.')[1]);
        if(!tokenData) return false;
        const expireTime = new Date(tokenData.exp*1000);
        const nowDate = new Date();
        if(expireTime < nowDate) return false;
        return true;
    }

    decode64(string) {
        if(!string) {
            return;
        }
        const buffer = new Buffer(string, "base64");
        return buffer.toString('ascii');
    }


    async login(credentialsObject) {
        const AUTH_URL = `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_AUTH_PATH}`;

        if(!credentialsObject instanceof Credentials) {
            return false;
        }
        const response = await axios.post(AUTH_URL, credentialsObject, {headers: this.getPublicHeaders()});
        this.setToken(response.data.token);
        return response;
    }

    getCountries() {
        return new Promise(async(resolve, reject) => {
            if(sessionStorage.getItem('countries')) {
                const result = JSON.parse(sessionStorage.getItem('countries'));
                return resolve(result);
            }
            const countries_URL = `${process.env.NEXT_PUBLIC_API_URL}countries/`;
            const response = await axios.get(countries_URL,{
                headers: this.getPublicHeaders()
            });
            sessionStorage.setItem('countries', JSON.stringify(response.data.results));
        });
    }

    async createUser(userObject) {
        const createUser_URL = `${process.env.NEXT_PUBLIC_API_URL}auth/users/`;
        if (!userObject instanceof User) {
            return false;
        }

        return await axios.post(createUser_URL,
            userObject,
            {headers: this.getPublicHeaders()});
    }

    async getCurrentUser(token=null) {
        const user_URL = `${process.env.NEXT_PUBLIC_API_URL}me/`;
        return await axios.get(user_URL, {headers: this.getPrivateHeaders(token)});
    }

    getToken() {
        return localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN_NAME);
    }

    setToken(token) {
        localStorage.setItem(process.env.NEXT_PUBLIC_TOKEN_NAME, token);
        const expireDate = new Date();
        const daysBeforeExpire = 2;
        expireDate.setTime(expireDate.getTime() + (daysBeforeExpire*24*60*60*1000));
        document.cookie = `${process.env.NEXT_PUBLIC_TOKEN_NAME}=${token};expires=${expireDate.toUTCString()};path=/`;
    }
}

export default new UserKit();