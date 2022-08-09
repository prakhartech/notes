//import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Head from './Head';
import CreateNote from './CreateNote';
import Note from './Note';
import React, { useState, useEffect } from 'react';

const getItemFromList = () =>{
  let list = localStorage.getItem('lists');
  if(list){
    return JSON.parse(localStorage.getItem('lists'));
  }else{
    return [];
  }

}
function App() {
  const [addItem, setAddItem] = useState(getItemFromList());

  const addNote = (note) =>{
    setAddItem((prevData)=>{
      return [...prevData, note];
    });
      
  };

  const onDelete = (id) =>{

    setAddItem((oldData) =>
      oldData.filter((currData, indx) =>{
        return indx !== id;
      })
    );

  };
  useEffect(() => {
      localStorage.setItem('lists', JSON.stringify(addItem))
  }, [addItem]);

  return (
    <>
    <div>
      <Head/>
      <CreateNote passNote = {addNote} />
    
      {addItem.map((val, index) =>{
          return(<Note
            key = {index}
            id = {index}
            title = {val.title}
            content = {val.content}
            deleteItem = {onDelete}
          />

          );
      })
      }
      <Footer/>
      </div>
      </>
  );
}

export default App;
