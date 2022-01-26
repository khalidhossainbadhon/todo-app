import React from "react";
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import "../Styles/style.css";
export default function Todo() {
  return (
    <div className="main-div">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          name=""
          id="input-box"
          placeholder="Type your todo here!"
        />
        <FontAwesomeIcon icon="fa-regular fa-circle-plus" />
      </div>
    </div>
  );
}
