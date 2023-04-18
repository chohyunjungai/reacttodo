import React from "react";

function TodoList({ title, users, onDelete, onToggle, isDone }) {
  const filteredUsers = users.filter((user) => user.isDone === isDone);

  return (
    <div className="TodoList">
      <div>{title}</div>
      {filteredUsers.map((user) => (
        <div key={user.id} className="Todo">
          <div className="TodoTitle">{user.title}</div>
          <div className="TodoBody">{user.body}</div>
          <div className="TodoButtonContainer">
            <button className="DeleteButton" onClick={() => onDelete(user.id)}>
              삭제하기
            </button>
            {isDone ? (
              <button className="CancelButton" onClick={() => onToggle(user.id)}>
                취소
              </button>
            ) : (
              <button className="DoneButton" onClick={() => onToggle(user.id)}>
                완료
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
