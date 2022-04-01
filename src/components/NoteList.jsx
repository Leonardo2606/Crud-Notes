import React from 'react';
import NoteCard from './NoteCard';
import { useSelector } from 'react-redux';
import { NotesList } from '../styled';

function NoteList() {

    const notesArray = useSelector(state => state.notes.notes);

    return (
        <NotesList>
            {notesArray.map((note, index)=>{
                return <NoteCard key={index} note={note} index={index}/>
            })}
        </NotesList>
    )

}

export default NoteList;