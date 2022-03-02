import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Container } from '@mantine/core';

function NavBar() {
  return (
    <Container>
      <Anchor
        component={Link}
        to="/"
        size="lg"
        style={{ margin: 20 }}
      >
        Home
      </Anchor>
      <Anchor
        component={Link}
        to="/login"
        size="lg"
        style={{ margin: 20 }}
      >
        Login/Register
      </Anchor>
    </Container>
  )
}

export default NavBar;