export function newNote(note) {
    return {
        type: 'NewNote',
        payload: note
    }
}

export function deleteNote(index) {
    return {
        type: 'DeleteNote',
        payload: index
    }
}

export function newCategory(category) {
    return {
        type: 'category',
        payload: category
    }
}