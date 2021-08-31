import React from 'react';
import Todo from './Todo.js';


const TodoList = props => {

    const handleClick = () => {
        props.handleClearing();

    }
    return(
        <div className = 'To-Do List'>
            <ol>
                {props.toDoItems.map(item =>( 
                <Todo handleDone = {props.handleDone} key = {item.id} item ={item}/>
                ))}
            </ol>
            <button onClick = {handleClick}>Clear Finished Tasks</button>
        </div>
    )
}

export default TodoList;
