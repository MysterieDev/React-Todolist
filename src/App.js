import React, { Component } from "react";
import HeaderSection from "./components/layout/HeaderSection";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
//SemanticUI
import { Container, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out the trash",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "Mow the lawn",
        completed: false
      },
      {
        id: uuid.v4(),
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
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  //Add Todo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Container>
        <HeaderSection />
        <AddTodo addTodo={this.addTodo} />
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
