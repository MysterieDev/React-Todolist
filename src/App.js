import React, { Component } from "react";

import Todo from "./components/Todo";
//SemanticUI
import { Container, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Mow the lawn",
        completed: false
      },
      {
        id: 3,
        title: "Learn react",
        completed: false
      }
    ]
  };

  //Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  //Delete Todo
  delTodo = id => {
    console.log(id);
  };
  render() {
    return (
      <Container>
        <List>
          <Todo
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </List>
      </Container>
    );
  }
}

export default App;
