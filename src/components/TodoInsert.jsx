import React, { useState } from "react";

function TodoInsert({ setTodo }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmitClick = (e) => {
    e.preventDefault();
    let newTodoItem = {
      title,
      contents,
      isDone: false,
    };
    if (title === "" || contents === "") {
      alert("제목과 내용을 추가해 주세요");
    } else setTodo((prev) => [...prev, newTodoItem]);
  };

  //   };

  return (
    <form className="add-box" onSubmit={handleSubmitClick}>
      <div className="input-box">
        <h4>제목</h4>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <h4>내용</h4>
        <input
          type="text"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        ></input>
      </div>
      <div>
        <button className="add-btn">추가하기</button>
      </div>
    </form>
  );
}

export default TodoInsert;
