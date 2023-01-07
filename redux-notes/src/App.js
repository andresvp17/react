import React from 'react';
import Notes from './components/Notes';
import NewNote from './components/NewNote';
import VisibilityChange from './components/VisibilityChange'
import './App.css'

function App() { 
  return (
    <div>
      <NewNote />
      <VisibilityChange />
      <Notes />
    </div>
  )
}

export default App;
