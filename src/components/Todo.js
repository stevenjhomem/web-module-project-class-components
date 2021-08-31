import React from 'react';
import './Todo.css';

const Todo = props => {

     const handleClick = () => {
       props.handleDone(props.item.id);
    };

    return (
        <div  onClick = {handleClick} className ={`item${props.item.done ? "Done":""}`}>
            <li>{props.item.name}</li>
        </div>
    )
}

export default Todo;