import React from 'react';
import {Category, CardNote, DeleteNoteIcon} from '../styled';
import trash from '../assets/trash.png';
import {deleteNote} from '../store/reducers/notesReducer';
import {useDispatch} from 'react-redux';


function NoteCard({note, index}) {

    const dispatch = useDispatch();

    return (
        <CardNote className='cardNote'>
            <DeleteNoteIcon onClick={()=>{dispatch(deleteNote(index))}} src={trash}/>
            <Category>{note.category}</Category>
            <h2 className='cardTitle'>{note.title}</h2>
            <p>{note.text}</p>
        </CardNote>
    )

}

export default NoteCard;