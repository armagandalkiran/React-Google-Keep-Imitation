import React, { useState } from "react";


function CreateArea(props) {
  
  const [note,setNote] = useState({
    title:"",
    content:""
  }); 

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

  return (
    <div>
      <form>
        <input onChange={CreateNotes} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={CreateNotes} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;