import React, { useState } from "react";

const AddNote = ({handleAddNote}) => {
  const [noteText, setNoteText] = useState("");
  const CharactorLimit = 200;
  const handleChange = (event) => {
    if(CharactorLimit - event.target.value.length >= 0){
      setNoteText(event.target.value);
    }
    
  };
  const handleSavelick = () => {
    if(noteText.trim().length > 0){
      handleAddNote(noteText)
      setNoteText("")
    }else{
      alert("type some thing")
    }
 
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        value={noteText}
        placeholder="type to add new note..."
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{CharactorLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSavelick}>
          Save
        </button>
      </div>
    </div>
  );
};
export default AddNote;
