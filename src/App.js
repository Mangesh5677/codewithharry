import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import React,{useState} from 'react' 
function App() { 
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo =[];
  }else{
   initTodo = JSON.parse(localStorage.getItem("todos"));
  }
const onDelete = (todo)=>{
  console.log("I am onDelete of todo", todo);
  // Deleting this way in react does not work  // let index = todos.indexOf(todo);
  // todos.splice(index,1);

  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
  localStorage.setItem("todos", JSON.stringify(todos));
}

 const[todos, setTodos] = useState([initTodo]);
    const addTodo = (title, desc) => {
    const sno = todos.length ? todos[todos.length - 1].sno + 1 : 1;
    const newTodo = { sno, title, desc };
    setTodos([...todos, newTodo]); 
    console.log("Added todo:", newTodo);
    if (todos.length === 0) {
      localStorage.setItem("todos", JSON.stringify([newTodo]));
    } else {
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    }
  }
  return (
    <>
      <Header title="My Todos List" Searchbar={false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
