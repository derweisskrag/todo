import React from "react";
import logo from './logo.svg';
import './App.css';

import {useEffect, useState} from "react";
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";


function App() {
  // states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");
  //useEffect
  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //functions
  const filterHandler = () => {
    switch(status){
      case "completed":{
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      }
      case "uncompleted":{
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      }
      default:{
        setFilteredTodos(todos);
      }
    }
  };

function saveLocalTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
  }


function getLocalTodos() {
  const localTodos = JSON.parse(localStorage.getItem('todos'));
  if(localTodos){
    setTodos(localTodos);
  }
  console.log('Retrieved localTodos:', localTodos);

  console.log('Updated todos:', todos);
}

const addTodo = (todo) => {
    setTodos([...todos, todo]);
    localStorage.setItem('todos', JSON.stringify([...todos, todo]));
  };


  return (
    <div className="App">
    <header>
      <div className = "title">ToDo List</div>
    </header>
      <Form 
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
        addTodo={addTodo}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;