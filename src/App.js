import React, { Component } from "react";

import Todo from "./components/Todo";
//SemanticUI
import { Container } from "semantic-ui-react";
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
        title: "Mow the law",
        completed: false
      },
      {
        id: 3,
        title: "Learn react",
        completed: false
      }
    ]
  };
  render() {
    return (
      <Container>
        <Todo todos={this.state.todos} />
      </Container>
    );
  }
}

export default App;
