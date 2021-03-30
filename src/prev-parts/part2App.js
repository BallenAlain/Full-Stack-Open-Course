import React from 'react'
import Note from './components2/Note'

const App2 = ({ notes }) => {
  return (
    <>
      <h1>Notes</h1>
      <ul>
      {notes.map(note => 
          <Note key = {note.id} note = {note} />
        )}
      </ul>
    </>
  )
}

export default App2