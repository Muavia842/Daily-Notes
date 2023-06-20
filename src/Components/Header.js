import React from "react";
const HeaderCompo = ({ handleToggleDrakMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDrakMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
};
export default HeaderCompo;
