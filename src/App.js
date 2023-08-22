import './App.css';
import React, {Component} from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
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

  addTodo = (title) => {
    var new_id = 1;
    this.setState({ todos:this.state.todos.map(todo => {
      new_id = new_id+1;
    })});
    ///console.log(new_id);
    const newTodo = {
      id: new_id,
      title: title,
      completed : false
    }
    this.setState({ todos : [...this.state.todos, 
      newTodo]});
  }

  render (){
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} 
        markComplete={this.markComplete}
        delTodo={this.delTodo}/>
      </div>
    )
  }
} 

export default App; 
