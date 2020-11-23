import Headers from './headers';
import axios from 'axios';

export default class PostKit {

    static async getPostList(token) {
        return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}forum/posts`, {headers: Headers.getPrivateHeaders(token)})
    }
}