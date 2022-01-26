import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/style.css";

export default function Todo() {
  const [inputItems, setInputItems] = useState("");
  const [todo, setTodo] = useState([]);

  const addItems = () => {
    if (!inputItems === null) {
      setTodo((e) => [...e, inputItems]);
    }
  };

  return (
    <div className="main-div">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          name=""
          id="input-box"
          placeholder="Type your todo here!"
          value={inputItems}
          onChange={(e) => setInputItems(e.target.value)}
        />

        <submit type="button" className="add-btn" onClick={addItems}>
          Add
        </submit>
        {/* <FontAwesomeIcon icon="fa-regular fa-circle-plus" /> */}
      </div>
      <div className="show-items">
        {todo.map((currentItems, index) => {
          return (
            <div key={index}>
              <li>{currentItems}</li>
            </div>
          );
        })}
      </div>
    </div>
  );
}
