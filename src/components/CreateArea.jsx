import React, { useState } from "react";

function CreateArea(props) {
  // the title and content is an object
  const [info, setInfo] = useState({
    title: "",
    content: "",
  });

  // when onChange get triggered then call handleChange function with event
  function handleChange(event) {
    // add the new value to the previous value
    const { name, value } = event.target;
    setInfo((preValue) => {
      return { ...preValue, [name]: value };
    });
  }

  // function to submit the note
  function submitNote (event) {
    // click the add button the trigger the submitNote method 
    // then call the property function onAdd
    // then trigger the function addNote in App.jsx
    props.onAdd(info);
    setInfo({
      title: "",
      content: ""
    });
    // while submit always refresh the page, use this to prevent the page refresh
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          value={info.title}
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          value={info.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
