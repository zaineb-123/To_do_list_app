// App.jsx
import React, { useState, useRef, useEffect } from 'react';
import NavBar from './components/NavBar';
import TodoList from './components/TodoList';
import New from './components/New';
import Empty from './components/Empty';

const App = () => {
   const [todolist, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [editingTodo, setEditingTodo] = useState(null);

  
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('isDark');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const inputRef = useRef();

  
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return;
    
    if (editingTodo) {
      setTodoList((prev) =>
        prev.map((todo) =>
          todo.id === editingTodo.id ? { ...todo, text: inputText } : todo
        )
      );
      setEditingTodo(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: inputText,
        isComplete: false,
      };
      setTodoList((prev) => [...prev, newTodo]);
    }

    inputRef.current.value = "";
    setIsPopupOpen(false);
  };

 
  const toggleTodo = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

 
  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };
  
  const filteredTodos=todolist.filter((todo)=>{
    const sameSearch=todo.text.includes(searchTerm);
    const sameFilter= filter ==='all'||(filter==='complete' && todo.isComplete)||(filter==='incomplete'&& !todo.isComplete);
    return sameSearch && sameFilter;
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todolist));
  }, [todolist]);

  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDark));
  }, [isDark]);

  
  useEffect(() => {
    if (isDark) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [isDark]);

  return (
    <div className="app">
      <NavBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
        isDark={isDark}
        setIsDark={setIsDark}
      />

      {filteredTodos.length === 0 ? (
        <Empty />
      ) : (
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
       
        />
      )}

      <button 
        className="new-note" 
        onClick={() => {
          setEditingTodo(null);
          setIsPopupOpen(true);
        }}
      >
        +
      </button>

      <New
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false);
          setEditingTodo(null);
        }}
        onAdd={add}
        inputRef={inputRef}
      />
    </div>
  );
};

export default App;
