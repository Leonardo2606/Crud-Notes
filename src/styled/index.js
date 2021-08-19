import styled from 'styled-components';

/* NoteCreation Component*/

export const Select = styled.select`
    padding: 2px;
`

export const Form = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
`

export const CreatNoteButton = styled.button`
    margin-top: 15px;
    border: none;
    background-color: rgb(48, 118, 184);
    color: white;
    padding: 5px;
    font-weight: bold;
` 

export const InputLabel = styled.label`
    font-size: 1.1rem;
`

/* NoteCreation Component*/

/* NoteList component*/

export const NotesList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    background-color: rgba(255, 255, 255, 0.288);
    padding: 0;
    margin: 0;
`

/* NoteList component*/

/* Categories component */

export const CategoriesSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top:0;
    background-color: rgb(46, 78, 126);
    z-index: 1;
`

export const CategoriesList = styled.ul`
    width: 100%;
    margin-right: 40px;
    list-style: none;
    display: flex;
    justify-content: space-around;
    color: white;
`

export const CategoriesInput = styled.input`
    padding: 3px;
    margin-right: 5px;
`

/* Categories component*/

/* CARDNOTE component*/

export const Category = styled.p`
    position: absolute;
    top: 0;
    left: 2;
    padding: 2px;
    margin: 0;
`

export const CardNote = styled.article`
    background-color: rgba(255, 255, 255, 0.658);
    word-wrap: break-word;
    width: 205px;
    padding: 10px;  
    margin: 10px;
    position: relative;
` 
export const BaseBoard = styled.footer`
    max-height: 80px;
    padding: 5px;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.5);
`

export const DeleteNoteIcon = styled.img`
    background-color: rgba(255,255,255,0.05);
    width: 20px;
    height: 20px;
    margin: 5px;
    position: absolute;
    top:0;
    right:0;

    &:hover {
        cursor: pointer;
    }
`

/* CARDNOTE component*/