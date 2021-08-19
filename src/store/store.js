import {createStore, combineReducers} from 'redux';
import categoriesArray from './reducers/categories.reducer';
import notesArray from './reducers/notes.reducer';

const combinedReducers = combineReducers({
    category: categoriesArray,
    note: notesArray
})

export const store = createStore(combinedReducers);