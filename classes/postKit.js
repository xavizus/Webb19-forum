import Headers from './headers';
import axios from 'axios';
import {Post, Reply} from "./structs";
import UserKit from './userKit';

export default class PostKit {

    static async getPostList(token) {
        return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}forum/posts/`, {headers: Headers.getPrivateHeaders(token)});
    }

    static getCategories() {
        return this.getData('forum/categories/', 'categories', false);
    }

    static async getSpecificPost(token, id) {
        return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}forum/posts/${id}/`,{headers: Headers.getPrivateHeaders(token)});
    }

    static async getRepliesForPost(id) {
        return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}forum/posts/${id}/replies`,{headers: Headers.getPrivateHeaders(UserKit.getToken())});
    }

    static async postPost(postObject) {
        return await this.sendData('forum/posts/', postObject, Post);
    }

    static async postPostReply(replyObject) {
        const url = `${process.env.NEXT_PUBLIC_API_URL}forum/posts/`;
        if(!replyObject instanceof Reply) {
            return false;
        }
        try {
            const result = await axios.post(url, replyObject, {headers: Headers.getPrivateHeaders(UserKit.getToken())});
            return result;
        } catch(error) {
            console.error(error.message);
            return false;
        }
    }

    static async sendData(api_route, object, objectType) {
        const url = `${process.env.NEXT_PUBLIC_API_URL}${api_route}`;

        if(!object instanceof objectType) {
            return false;
        }
        try {
            const result = await axios.post(url, object, {headers: Headers.getPrivateHeaders(UserKit.getToken())});
            return result;
        } catch (error) {
            console.error(error.message);
            return false;
        }
    }

    static getData(api_route, key, isPublic=true) {
        return new Promise(async(resolve, reject) => {
            if(!sessionStorage) {
                reject('Not supported');
            }
            if(sessionStorage.getItem(key)) {
                const result = JSON.parse(sessionStorage.getItem(key));
                return resolve(result);
            }
            const countries_URL = `${process.env.NEXT_PUBLIC_API_URL}${api_route}`;
            const response = await axios.get(countries_URL,{
                headers: isPublic ? Headers.getPublicHeaders() : Headers.getPrivateHeaders(UserKit.getToken())
            });
            sessionStorage.setItem(key, JSON.stringify(response.data.results));
            resolve(response.data.results);
        });
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