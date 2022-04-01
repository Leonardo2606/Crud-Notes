import React from 'react';
import './assets/App.css';
import Categories from './components/Categories';
import Note from './components/Note';
import NoteList from './components/NoteList';
import {Provider} from 'react-redux'
import store from './store/store'
import { NoteCreatorContainer, ListCategoriesContainer, Container } from './styled';

function App() {

  

  return (
    <Provider store={store}>
      <Container>
        <NoteCreatorContainer>
          <h1 className='title'>Nova Nota</h1>
          <Note/>
        </NoteCreatorContainer>
        <ListCategoriesContainer>
          <Categories/>
          <NoteList/>
        </ListCategoriesContainer>
      </Container>
    </Provider>
   
  )
  

}

export default App;

