import React, { Component } from "react";

class TodoItem extends Component {
  state = {};
  render() {
    return <p> {this.props.todo.title} </p>;
  }
}

export default TodoItem;
