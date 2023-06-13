import {API_KEY} from './constants/constants'
export const Originals=`discover/tv?api_key=${API_KEY}&with_networks=213`;
export const Action=`discover/movie?api_key=${API_KEY}&with_genres=28`;
export const Trending = `trending/movie/day?api_key=${API_KEY}&language=en-US`;
export const ComedyMovies=`discover/movie?api_key=${API_KEY}&with_genres=35`;
export const HorrorMovies=`discover/movie?api_key=${API_KEY}&with_genres=27`;
export const Series=`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US`;
export const RomanceMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const Documentaries= `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`;
export const Popular=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

