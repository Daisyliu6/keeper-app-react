import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // add the note to an array; initial with an empty array
  const [notes, setNotes] = useState([]);

  // passing the new note to the app
  function addNote(newNote) {
  // use the setNotes method to update the state
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  // use the id to delete the one being clicked
  function handleDelete(id) {
    setNotes((prevInfo) => {
      return prevInfo.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={handleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
