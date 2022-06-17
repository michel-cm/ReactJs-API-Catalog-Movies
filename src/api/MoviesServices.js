import axios from 'axios';

const API_KEY = '97b677ce9cb61c49089baaf51cfe8fd1';
const BASE_URL = 'https://api.themoviedb.org/3/'

// Função para juntar a BASE_URL com a API_Key sem ter que ficar fazendo isso toda hora quando for chamar nosso métodos.
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'))
    }

    static getMovieDetail(id) {      
        return axios(withBaseUrl(`movie/${id}`))        
    }
}