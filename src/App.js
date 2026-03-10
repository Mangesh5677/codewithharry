import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

  // Load todos from localStorage
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  // Delete Todo
  const onDelete = (todo) => {
    console.log("Deleting todo:", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  };

  // Add Todo
  const addTodo = (title, desc) => {

    if (!title || !desc) {
      alert("Title or Description cannot be empty");
      return;
    }

    const sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };

    setTodos([...todos, myTodo]);
  };

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    <Router>
      <Header title="My Todos List" Searchbar={false} />
      <Switch>
        <Route exact path='/' render={() => {
          return (<>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
        )
        }}>
       
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
      </Switch>
      
      <Footer />
      </Router>
    </>
  );
}

export default App;