import axios from "axios";
import {User, Credentials} from "./userStructs";
import Headers from './headers';
import Cookies from "cookies";

class UserKit {

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
        const response = await axios.post(AUTH_URL, credentialsObject, {headers: Headers.getPublicHeaders()});
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
                headers: Headers.getPublicHeaders()
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
            {headers: Headers.getPublicHeaders()});
    }

    async getCurrentUser(token) {
        const user_URL = `${process.env.NEXT_PUBLIC_API_URL}me/`;
        return await axios.get(user_URL, {headers: Headers.getPrivateHeaders(token)});
    }

    getToken() {
        const token = document.cookie.split('; ')
            .find(row => row.startsWith(process.env.NEXT_PUBLIC_TOKEN_NAME))
            .split('=')[1];

        console.log(token);
        return token;
    }

    getTokenServerSide(context) {
        const cookies = new Cookies(context.req, context.res);
        let token = cookies.get(process.env.NEXT_PUBLIC_TOKEN_NAME);

        return token ? token : 'NotFound';
    }

    setToken(token) {
        const expireDate = new Date();
        const daysBeforeExpire = 2;
        expireDate.setTime(expireDate.getTime() + (daysBeforeExpire*24*60*60*1000));
        document.cookie = `${process.env.NEXT_PUBLIC_TOKEN_NAME}=${token};expires=${expireDate.toUTCString()};path=/`;
    }
}

export default new UserKit();