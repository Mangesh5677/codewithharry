import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.length === 0 ? <p className="text-center">No todos to display</p> : null}
      {props.todos.map((todo)=>{
        return <TodoItem todo={todo} onDelete={props.onDelete} key={todo.sno}/>
      })}
      
    </div>
  )
}

export default Todos
