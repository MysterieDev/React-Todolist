import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import PropTypes from "prop-types";
class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Add Todo"
            placeholder="Add Todo"
            value={this.state.title}
            onChange={this.onChange}
            name="title"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

//PropTypes
AddTodo.propTypes = {
  AddTodo: PropTypes.func.isRequired
};

export default AddTodo;
