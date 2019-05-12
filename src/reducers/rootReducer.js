import { combineReducers } from 'redux';
import { movieReducer } from './movies_reducer';

const rootReducer = combineReducers({
    movieReducer,
});

export default rootReducer;