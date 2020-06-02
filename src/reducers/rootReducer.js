import { combineReducers } from 'redux';
import bookStore from "./bookReducer";

const rootReducer = combineReducers({
    bookStore
});

export default rootReducer;
