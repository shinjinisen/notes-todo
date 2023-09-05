import React, { useState } from "react";
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
function CreateArea(props) {
    const [isExp, setExp]=useState(false);
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

  function expand()
  {
    setExp(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(inputText);
    setInputText({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        {isExp && (<input
          name="title"
          onChange={handleChange}
          value={inputText.title}
          placeholder="Title"
        />)}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={inputText.content}
          placeholder="Take a note..."
          rows={isExp? 3:1}
        />
        <Zoom in={isExp}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
