import React from "react";

function Note(props) {

  // click the button trigger the method handleClick then trigger onClick
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={handleClick}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
