import React, {useState} from 'react';

function useData() {
    const [notes, setNotes] = useState([]);
    function newNote(note) {
        setNotes([...notes, note]);
    }    

    const [categories, setCategories] = useState([]);
    function newCategory(category) {
        setCategories([...categories, category]);
    }

    return [notes, categories, newNote, newCategory];
}

export default useData;
