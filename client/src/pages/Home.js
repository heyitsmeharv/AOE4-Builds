import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { globalStyle } from '../styles/GlobalStyle';

import { Container } from '@mantine/core';

function Home() {
  const { loading, data } = useQuery(FETCH_BUILDS_QUERY);
  const { classes } = globalStyle();

  if (data) {
    console.log(data);
  }

  return (
    <Container className={classes.container}>
      Home
    </Container>
  );
}

const FETCH_BUILDS_QUERY = gql`
  {
    getPosts{
      id
      title
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;
