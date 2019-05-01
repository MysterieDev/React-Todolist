import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import { List } from "semantic-ui-react";

class Todo extends Component {
  state = {};

  markComplete = () => {
    console.log("hello");
  };

  render() {
    return this.props.todos.map(todo => (
      <List.Item as="li" key={todo.id}>
        <TodoItem key={todo.id} todo={todo} markComplete={this.markComplete} />
      </List.Item>
    ));
  }
}

//PropTypes
Todo.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todo;
