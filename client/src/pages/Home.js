import React from 'react';
import { globalStyle } from '../styles/GlobalStyle';

import { Container } from '@mantine/core';

function Home() {
  const { classes } = globalStyle();
  return (
    <Container className={classes.container}>
      Home
    </Container>
  );
}

export default Home;
