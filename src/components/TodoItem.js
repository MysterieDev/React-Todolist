import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  state = {};
  render() {
    return <React.Fragment> {this.props.todo.title} </React.Fragment>;
  }
}

//PropTypes
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
};

export default TodoItem;
