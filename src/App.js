import './App.css';
import React, {Component} from 'react';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos :[
      {
        id : 1,
        title : 'work on coding',
        completed : false
      },
      {
        id : 2,
        title : 'clean room',
        completed : true
      },
      {
        id : 3,
        title : 'write on Medium',
        completed : false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos:this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  } 

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter
      (todo => todo.id !== id)]});

  }
  render (){
    return (
      <div className="App">
        <Todos todos={this.state.todos} 
        markComplete={this.markComplete}
        delTodo={this.delTodo}/>
      </div>
    )
  }
} 

export default App; 
