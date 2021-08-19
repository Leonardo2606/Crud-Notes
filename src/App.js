import React, {useState} from 'react';
import './assets/App.css';
import Categories from './components/Categories';
import Note from './components/Note';
import NoteList from './components/NoteList';
import {Provider} from 'react-redux'
import {store} from './store/store';

function App() {

  

  return (
    <Provider store={store}>
      <div className='container'>
        <section className='title-and-notecreator'>
          <h1 className='title'>Notas</h1>
          <Note/>
        </section>
        <main className='list_and_categories'>
          <Categories/>
          <NoteList/>
        </main>
      </div>
    </Provider>
   
  )
  

}

export default App;

