import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  // the title and content is an object
  const [info, setInfo] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setExpanded] = useState(false);

  // when the textarea is clicked then trigger the expand function to set isExpanded true
  function expand() {
    setExpanded(true);
  }

  // when onChange get triggered then call handleChange function with event
  function handleChange(event) {
    // add the new value to the previous value
    const { name, value } = event.target;
    setInfo((preValue) => {
      return { ...preValue, [name]: value };
    });
  }

  // function to submit the note
  function submitNote(event) {
    // click the add button the trigger the submitNote method
    // then call the property function onAdd
    // then trigger the function addNote in App.jsx
    props.onAdd(info);
    setInfo({
      title: "",
      content: "",
    });
    // while submit always refresh the page, use this to prevent the page refresh
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            value={info.title}
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
        )}
        <textarea
          value={info.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onClick={expand}
          onChange={handleChange}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
