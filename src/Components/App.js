// import NotesList from "./NotesList";
// import { nanoid } from "nanoid";
// import "./index.css";
// import { useState, useEffect } from "react";
// import Search from "./search";
// import HeaderCompo from "./Header";
// const NotesApp = () => {
//   const [notes, setNotes] = useState([
//     {
//       text: "this is my first note!",
//       id: nanoid(),
//       date: new Date().toLocaleDateString(),
//     },
//     {
//       text: "this is my second note!",
//       id: nanoid(),
//       date: new Date().toLocaleDateString(),
//     },
//     {
//       text: "this is my third note!",
//       id: nanoid(),
//       date: new Date().toLocaleDateString(),
//     },
//   ]);

//   useEffect(() => {
//     const savedNotes = JSON.parse(
//       localStorage.getItem("react-projects-notes-app")
//     );
//     if (savedNotes) {
//       setNotes(savedNotes);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("react-projects-notes-app", JSON.stringify(notes));
//   }, [notes]);

//   const addNote = (text) => {
//     const date = new Date();
//     const newNote = {
//       id: nanoid(),
//       text: text,
//       date: date.toLocaleDateString(),
//     };
//     const newNotes = [...notes, newNote];
//     setNotes(newNotes);
//   };

//   const deleteNote = (id) => {
//     const dNotes = notes.filter((note) => note.id !== id);
//     setNotes(dNotes);
//   };
//   const [searchText, setSearchText] = useState("");
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={`${darkMode && "dark-mode"}`}>
//       <div className="container">
//         <div className="headerC">
//           <HeaderCompo handleToggleDrakMode={setDarkMode} />
//         </div>
//         <div className="searchC">
//           <Search handleSearchNote={setSearchText} />
//         </div>
//         <div className="notelistC">
//           <NotesList
//             notes={notes.filter((note) =>
//               note.text.toLocaleLowerCase().includes(searchText)
//             )}
//             handleAddNote={addNote}
//             handleDeleteNote={deleteNote}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default NotesApp;

import NotesList from "./NotesList";
import { nanoid } from "nanoid";
import "./index.css";
import { useState, useEffect } from "react";
import Search from "./search";
import HeaderCompo from "./Header";

const NotesApp = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-projects-notes-app")
    );
    return (
      savedNotes || [
        {
          text: "this is my first note!",
          id: nanoid(),
          date: new Date().toLocaleDateString(),
        },
        {
          text: "this is my second note!",
          id: nanoid(),
          date: new Date().toLocaleDateString(),
        },
        {
          text: "this is my third note!",
          id: nanoid(),
          date: new Date().toLocaleDateString(),
        },
      ]
    );
  });

  useEffect(() => {
    localStorage.setItem("react-projects-notes-app", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const dNotes = notes.filter((note) => note.id !== id);
    setNotes(dNotes);
  };

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <div className="headerC">
          <HeaderCompo handleToggleDrakMode={setDarkMode} />
        </div>
        <div className="searchC">
          <Search handleSearchNote={setSearchText} />
        </div>
        <div className="notelistC">
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText.toLowerCase())
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
        </div>
      </div>
    </div>
  );
};

export default NotesApp;
