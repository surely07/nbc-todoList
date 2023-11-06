import "./App.css";
import TodoTemplete from "./components/TodoTemplete";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";
import { useState } from "react";

function App() {
  const initialState = [
    {
      title: "제목1",
      contents: "내용1",
      isDone: false,
    },
    {
      title: "제목2",
      contents: "내용2",
      isDone: true,
    },
    {
      title: "제목3",
      contents: "내용3",
      isDone: false,
    },
  ];
  const [todo, setTodo] = useState(initialState);
  console.log(todo);

  return (
    <TodoTemplete>
      <TodoInsert setTodo={setTodo} />

      <TodoList isWorking={true} todo={todo} setTodo={setTodo} />
      <TodoList isWorking={false} todo={todo} setTodo={setTodo} />
    </TodoTemplete>
  );
}

export default App;
