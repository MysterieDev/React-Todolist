import React from "react";
import { Header, Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
function HeaderSection() {
  return (
    <header>
      <Menu>
        <Menu.Item name="editorials">
          <Link to="/">Todo-List</Link>
        </Menu.Item>

        <Menu.Item name="reviews">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>

      <Header as="h2" icon textAlign="center">
        <Icon name="calendar alternate outline" circular />
        <Header.Content>To Do Liste</Header.Content>
      </Header>
    </header>
  );
}

export default HeaderSection;
