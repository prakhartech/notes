import React from 'react';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Note.css';

const Note = (props) => {

    const deleteNote = () =>{
        props.deleteItem(props.id);
    };

    return <>
    <div className="notecard">
        <h5>{props.title}</h5>
        <p>{props.content}</p>
        <Button onClick={deleteNote}>
            <DeleteOutlineIcon/>
        </Button>
    </div>
    </>;
}

export default Note;