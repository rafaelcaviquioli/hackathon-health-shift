import React, { Component } from 'react';
import cx from 'classnames';
import uncheckImage from 'assets/images/checkbox-uncheck.svg';
import checkImage from 'assets/images/checkbox-check.svg';

class Tasks extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: '(Concluído) 11/11 01:00 - 13:00 - Dr. Ronaldo',
        completed: true
      },
      {
        id: 2,
        content: '(Andamento) 11/11 13:00 - 21:00 - Dr. Luis',
        completed: false
      },
      {
        id: 3,
        content: '11/11 21:00 - 12/11 07:00 - Dra. Maria',
        completed: false
      },
      {
        id: 4,
        content: '12/11 07:00 - 17:00 - Dr. Ronaldo',
        completed: false
      }
    ]
  };

  toggleComplete = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      })
    });
  }

  deleteTodo = todoId => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    });
  }

  render() {
    return (
      <div className="card ">
        <div className="header">
          <h4 className="title">Plantões hoje</h4>
        </div>
        <div className="content">
          <form>
          {this.state.todos.map(todo => (
            <div className={cx("todo-item", {completed: todo.completed})} key={todo.id}>
              <div className="todo-item-wrapper">
              <label className={cx("checkbox", {
                  checked: todo.completed
                })}
                >
                  <span className="icons">
                    <img className="first-icon" src={uncheckImage} width={17} />
                    <img className="second-icon" src={checkImage} width={17} />
                  </span>
                  <input type="checkbox" data-toggle="checkbox" checked={todo.completed} onChange={() => this.toggleComplete(todo.id)} />
                </label>
                <div className="todo-content">{todo.content}</div>
                <a onClick={() => this.deleteTodo(todo.id)}>
                  &times;
                </a>
              </div>
            </div>
          ))}
          </form>
        </div>
      </div>
    );
  }
}

export default Tasks;