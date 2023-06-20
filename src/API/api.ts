import axios from "axios";

export const API = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/upcoming',
    params: {
        api_key:process.env.NEXT_PUBLIC_MOVIES
    }
})