
const notesArray = (state = [], action) => {

    switch(action.type) {
        case 'NewNote':
            const newArray = [...state, action.payload];
            return newArray;
        case 'DeleteNote':
            const deletedNote = [...state];
            deletedNote.splice(action.payload, 1);
            return deletedNote;
        default:
            return state;
    }

}

export default notesArray