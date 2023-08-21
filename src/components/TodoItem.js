import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
        backgroundColor : '#f4f4f4',
        padding : '10px',
        borderBottom : '1px #ccc dotted',
        textDecorationLine: this.props.todo.completed ? 
        'line-through' : 'none' 

    }
  }
  
    render() {
        const {id, title} = this.props.todo;
        return (
        <div style = {this.getStyle()}>
            <p>
                <input type="checkbox" onChange=
                {this.props.markComplete.bind(this,id)}/> {" "}
                {title}
                <button onClick={this.props.delTodo.bind(this,id)}
                style = {btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background : "#ff0000",
    color : "#fff",
    cursor : "pointer",
    padding : "1px 6px",
    float : "right"
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem