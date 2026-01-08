
import React, { useEffect, useState ,useRef} from 'react';

const Todoitems = ({ todo, onToggle, onDelete, onEdit, editingId, onUpdate }) => {
  const [value,setValue]=useState(todo.text);
  const inputRef=useRef(null);

  useEffect(()=>{
    if (editingId === todo.id && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.selectionStart = inputRef.current.selectionEnd = value.length;

    }
  },[editingId,todo.id,value]);
  return (
    <div className={`todo_list ${editingId === todo.id ? 'editing' : ''}`}>
      <input
        type="checkbox"
        className='todo_btn'
        checked={todo.isComplete}
        onChange={() => onToggle(todo.id)}
      />

      {editingId === todo.id ? (
         <>
          <input
            ref={inputRef}
            type="text"
            className="todo_edit_input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        <div className="edit-confirm" onClick={() => onUpdate(todo.id, value)}>
                  <svg xmlns="http://www.w3.org/2000/svg"  width="28" height="28" fill="#6c63ff" class="bi bi-check" viewBox="0 0 16 16">
          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
        </svg>
          </div>

          
          <div className="edit-cancel" onClick={() => onUpdate(todo.id, todo.text, true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="red" class="bi bi-x" viewBox="0 0 16 16" strokeWidth={2.5}>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
          </div>
        </>
      ) : (
        <div className={`todo_text ${todo.isComplete ? 'completed' : ''}`}>
          {todo.text}
        </div>
      )}

    
      <div className='edit-icon' onClick={() => onEdit(todo.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" strokeWidth={2.5}>
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
          </svg>
        </div>
        <div className='delete-icon' onClick={() => onDelete(todo.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
          </svg>
        </div>
    </div>
  );
};

export default Todoitems;