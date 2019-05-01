import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import { List } from "semantic-ui-react";

class Todo extends Component {
  state = {};
  render() {
    return this.props.todos.map(todo => (
      <List.Item as="li">
        <TodoItem key={todo.id} todo={todo} />
      </List.Item>
    ));
  }
}

//PropTypes
Todo.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todo;
