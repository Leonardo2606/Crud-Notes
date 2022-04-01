import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    notes: []
}

const notesReducer = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        newCategory(state, action) {
            state.categories = [...state.categories, action.payload]
        },
        deleteCategory(state){
            state.categories.splice(state.categories.length-1, 1);
        },
        deleteCategoryClick(state, action) {
            state.categories.splice(action.payload, 1);
        },
        newNote(state, action){
            state.notes = [...state.notes, action.payload]
        },
        deleteNote(state, action) {
            state.notes.splice(action.payload, 1)
        }
    }
});

export const {newCategory, deleteCategory, deleteCategoryClick, newNote, deleteNote} = notesReducer.actions;
export default notesReducer.reducer;