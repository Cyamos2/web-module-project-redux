import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import movieReducer from './movieReducer';

export default movieReducer;
const rootReducer = combineReducers({
    movieReducer,
    favoritesReducer,
})

export default rootReducer;