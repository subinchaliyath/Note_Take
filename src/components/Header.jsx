import React from "react";
import EventNoteIcon from '@material-ui/icons/EventNote';

function Header() {
  return (
    <header>
      <h1 className="ml-3">
        <EventNoteIcon />
        Take Note
      </h1>
    </header>
  );
}

export default Header;
