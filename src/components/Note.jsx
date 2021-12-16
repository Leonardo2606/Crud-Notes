import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {newNote} from '../store/actions/notes_categories.actions';
import { Select, Form, CreatNoteButton, InputLabel} from '../styled';

function Note() {

    const dispatch = useDispatch();
    const categoryArray = useSelector(state => state.category);

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [category, setCategorie] = useState('Sem categoria');
    const note = {title, text, category};

    return (
        <Form 
            onSubmit={(event)=>{
                event.preventDefault();
            }}
            className='noteSection'>
            <Select onChange={event=>setCategorie(event.target.value)}>
                <option selected>Sem categoria</option>
                {categoryArray.map(category=>{
                    return <option>{category}</option>
                })}
            </Select>
            <InputLabel htmlFor='noteTitle'>Titulo</InputLabel>
            <input 
                onChange={event=>setTitle(event.target.value)}
                type='text' 
                id='noteTitle'
            />
            <InputLabel htmlFor='noteText'>Texto</InputLabel>
            <textarea 
                onChange={event=>setText(event.target.value)} 
                rows='10' 
                id='notetext'
            />
            <CreatNoteButton
                onClick={()=>{dispatch(newNote(note))}} 
                type='submit'>Criar Nota</CreatNoteButton>
        </Form>
    )

}

export default Note;