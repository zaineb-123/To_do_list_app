import React from 'react';
import Todoitems from './Todoitems';
import { FaUpDown } from 'react-icons/fa6';

const TodoList = ({ todos, onToggle, onDelete, onEdit,editingId,onUpdate }) => {
  return (
    <div className="todo-container">
      {todos.map((todo) => (
        <Todoitems
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          editingId={editingId}
          onUpdate={onUpdate}
          
        />
      ))}
    </div>
  );
};

export default TodoList;