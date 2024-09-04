import React from "react";
import "./styles.css";

function ToggleButton() {
  return (
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label>
  );
}

export default ToggleButton;
