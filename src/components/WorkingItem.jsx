import React from "react";

function WorkingItem({ item, isWorking, setTodo }) {
  return (
    <div className="working-list-item">
      <div>
        <h3>{item.title}</h3>
        <p>{item.contents}</p>
      </div>
      <div className="state-btn">
        <button className="delete-btn">삭제</button>
        <button className="complete-btn">{isWorking ? "완료" : "취소"}</button>
      </div>
    </div>
  );
}

export default WorkingItem;
