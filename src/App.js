import React, { useState } from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

const toDoItems = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      toDoItems : toDoItems,
    }
  }

  handleDone = (id) => {
    this.setState({
      toDoItems : this.state.toDoItems.map(item =>{
        if(item.id === id){
          return (
            {
              ...item,
              done: !item.done
          })
        } return (item)
      })
    });
  }

  handleAddToDoItem = (name) => {
    const newItem = {
      name: name,
      id: Date.now(),
      done: false
    };
    this.setState({
      toDoItems : [...this.state.toDoItems, newItem]
    })
  }

  handleClearing = () => {
    this.setState({
      ...this.state,
      toDoItems: this.state.toDoItems.filter(item => {
        return(item.done===false);
      })
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <h2> What would you like to get done today?</h2>
        <TodoForm handleAddToDoItem = {this.handleAddToDoItem}/>
        <TodoList handleDone = {this.handleDone} handleClearing = {this.handleClearing} toDoItems = {this.state.toDoItems}/>
      </div>
      
    );
  }
}

export default App;
