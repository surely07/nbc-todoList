import React from "react";
import WorkingItem from "./WorkingItem";

function TodoList({ isWorking, todo, setTodo }) {
  console.log(todo);
  return (
    <div className="todo-list">
      <div>
        <h2>{isWorking ? "Working" : "Done"}</h2>
        <div className="working-list">
          {todo
            .filter((item) => item.isDone !== isWorking)
            .map((item) => {
              return (
                <WorkingItem
                  item={item}
                  isWorking={isWorking}
                  setTodo={setTodo}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
