import {getMoviesListDb, getMovieDb, getMovieSearchDb} from '../services/movieService';

// ======== ACTION_CREATORS
export const getMoviesListSuccess = (movieList) => {
    return {
        type: 'GET_MOVIES_LIST', movieList
    }
}
export const getMovieSuccess = (movie) => {
    return {
        type: 'GET_MOVIE', movie
    }
}

// ======== ACTIONS
export const getMoviesList = () => {
    return (dispatch) => {
        const movieList = getMoviesListDb();
        dispatch(getMoviesListSuccess(movieList))
    }
}
export const getMovie = (movieId) => {
    return (dispatch) => {
        const movie = getMovieDb(movieId);
        dispatch(getMovieSuccess(movie))
    }
}
export const getMovieSearch = (title) => {
    return (dispatch) => {
        const movie = getMovieSearchDb(title);
        dispatch(getMovieSuccess(movie))
    }
}