import React, { Component } from "react";
import PropTypes from "prop-types";
import { Segment, Button } from "semantic-ui-react";
class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { title, id } = this.props.todo;

    return (
      <Segment stacked>
        <p style={this.getStyle()}>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
        </p>
        <Button basic color="red" onClick={this.props.delTodo.bind(this, id)}>
          Delete Item
        </Button>
      </Segment>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
