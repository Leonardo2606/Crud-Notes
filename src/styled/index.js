import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    @media(max-width: 1100px) {
        display: block;
    }
`

export const NoteCreatorContainer = styled.section`
    background-color: rgba(255, 255, 255, 0.658);
    width: 30%;
    height: 331px;
    max-height: 331px;
    text-align: center;
    padding: 10px;
    position: sticky;
    top: 0;
    left: 0;
    @media(max-width: 1100px) {
        position: relative;
        margin: auto;
        width: 50%;
    } 
    @media(max-width: 600px) {
        width: 80%;
    }
`
export const ListCategoriesContainer = styled.main`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50px auto;
    margin: 0;
    padding: 0;
    width: 100%;
    @media(max-width: 600px) {
        display: block;
    }
`

/* NoteCreation Component*/

export const Select = styled.select`
    padding: 2px;
`

export const Form = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
`

export const TextArea = styled.textarea`
    resize: none;
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
    flex-wrap: wrap;
    color: white;
    @media(max-width: 600px) {
        margin-right: 20px;
        padding: 0 0 0 5px;
    }
`

export const CategoryItem = styled.li`
    margin: 0 5px;
    :hover{
        cursor: pointer;
    }
`

export const CategoriesInput = styled.input`
    padding: 3px;
    margin-right: 5px;
    @media(max-width: 600px) {
        width: 100px;
    }
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
    @media(max-width:600px){
        margin:5px;
    }
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