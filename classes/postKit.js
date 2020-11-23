import Headers from './headers';
import axios from 'axios';

export default class PostKit {

    static async getPostList(token) {
        return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}forum/posts`, {headers: Headers.getPrivateHeaders(token)});
    }

    static async getCategories(token) {
        return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}forum/categories/`, {headers: Headers.getPrivateHeaders(token)});
    }

    static getCountries() {
        return new Promise(async(resolve) => {
            if(sessionStorage.getItem('countries')) {
                const result = JSON.parse(sessionStorage.getItem('countries'));
                return resolve(result);
            }
            const countries_URL = `${process.env.NEXT_PUBLIC_API_URL}countries/`;
            const response = await axios.get(countries_URL,{
                headers: Headers.getPublicHeaders()
            });
            sessionStorage.setItem('countries', JSON.stringify(response.data.results));
            resolve(response.data.results);
        });
    }
}