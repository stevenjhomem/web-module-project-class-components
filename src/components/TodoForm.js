import React, { useState } from 'react';

class TodoForm extends React.Component{

    constructor() {
        super();
        this.state = {
            inputValue : ""
        }
    }

    handleChanges = (e) => {
        this.setState({
            ...this.state,
            inputValue: e.target.value})
    }

    handleClick = (e)=>{
        e.preventDefault();
        this.props.handleAddToDoItem(this.state.inputValue);
    }

    render (){
        return(
            <div>  
                <form>
                    <input 
                    type = 'text'
                    placeholder = 'Enter in your To-Do Item'
                    onChange = {this.handleChanges}></input>
                    <button onClick = {this.handleClick}>Add Task!</button>
                </form> 
            </div>
        );
    } 
};

export default TodoForm;