import React from "react";
import { Header } from "semantic-ui-react";

function About() {
  return (
    <React.Fragment>
      <hr />
      <Header as="h2" icon textAlign="center">
        <Header.Content>
          TodoList app v1.0.0 with SemanticUI widgets
        </Header.Content>
      </Header>
    </React.Fragment>
  );
}

export default About;
