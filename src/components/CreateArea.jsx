import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  


  const [note,setNote] = useState({
    title:"",
    content:""
  }); 

  const [clicked,setClicked] = useState({
    rowNumber:1,
    isClicked:false
  })

  function CreateNotes (event) {
    const {name,value} = event.target;
    setNote(prevNotes =>{
      return {
        ...prevNotes,
        [name]:value
      }
    });
  }

  function submitNote (event) {
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    })
    event.preventDefault();
  }

  function ExpandTextArea (){
    setClicked({
      rowNumber:3,
      isClicked:true
    })
  }

  return (
    <div>
      <form className="create-note">
        {clicked.isClicked ? <input onChange={CreateNotes} name="title" placeholder="Title" value={note.title} 
          />: null
        }
        <textarea onClick={ExpandTextArea} onChange={CreateNotes} name="content" placeholder="Take a note..." rows={clicked.rowNumber} value={note.content}/>
        <Zoom in = {clicked.isClicked}>
        <Fab onClick={submitNote}>
          <AddIcon/>
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;