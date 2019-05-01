import React from "react";
import { Header, Icon } from "semantic-ui-react";
function HeaderSection() {
  return (
    <header>
      <Header as="h2" icon textAlign="center">
        <Icon name="calendar alternate outline" circular />
        <Header.Content>To Do Liste</Header.Content>
      </Header>
    </header>
  );
}

export default HeaderSection;
