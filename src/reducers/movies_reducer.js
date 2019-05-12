const GET_MOVIES_LIST = 'GET_MOVIES_LIST';
const GET_MOVIE = 'GET_MOVIE';


export function movieReducer (state = {movieList:[], movie: {}}, action = {}) {
    switch(action.type){
        case GET_MOVIES_LIST:
            return {...state, movieList: action.movieList};
        case GET_MOVIE:
            return {...state, movie: action.movie};
        default:
            return state;
    }
}