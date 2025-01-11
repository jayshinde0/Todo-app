import React from "react";
const Todoitem = (props) => {
  return (
    <div>
      <li className="todo-item">
        <span>
          <input type="checkbox" />
          <span className="text">{props.text}</span>
        </span>
        <span>...</span>
      </li>
    </div>
  );
};

export default Todoitem;
