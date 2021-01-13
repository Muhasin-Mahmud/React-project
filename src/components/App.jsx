import React, { useState } from "react"

import Header from "./Header"
import Greeting from "./Greeting"
import Footer from "./Footer"

import "../css/App.css";
import CreateArea from "./CreateArea"
import Note from "./Note";





const App = () => {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
    setNotes(prevNotes => {
        return [...prevNotes, newNote]
    })
    };

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
        }

    return (
        <main>
            < Header />
            < Greeting />
            < CreateArea 
            onAdd ={addNote}/>

           {notes.map((noteItem, index) =>{
               return ( 
               < Note 
               key = {index}
               id = {index}
               title = {noteItem.title}
               content = {noteItem.content}
               onDelete = {deleteNote}
               />
               );
            })}
          
        
            < Footer />
        </main>
    )
};


export default App;