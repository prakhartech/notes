import React, { useState } from "react";
import "./CreateNote.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setNote((prevdata) => {
        return {
          ...prevdata,
          [name]: value,
        };
      });
  };

  const addEvent = () =>{
        props.passNote(note);
        setNote({
          title: "",
          content: "",
        });
  };

  return(
  <>
    <div className="main_note">
      <form>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={InputEvent}
          placeholder="Title"
          autoComplete="off"
        />
        <textarea
          cols=""
          rows=""
          name="content"
          value={note.content}
          onChange={InputEvent}
          placeholder="Write a Note..."
        ></textarea>
        <Button onClick={addEvent}>
          <AddIcon />
        </Button>
      </form>
    </div>
  </>);
}
export default CreateNote;