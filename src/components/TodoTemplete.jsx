import React from "react";

function TodoTemplete(props, setTodo) {
  return (
    <div className="wrapper">
      <div>
        <header className="header-style">
          <h1>My Todo List</h1>
          <h1>React</h1>
        </header>
      </div>
      {props.children}
    </div>
  );
}

export default TodoTemplete;
