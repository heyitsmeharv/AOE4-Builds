import React from 'react';
import { globalStyle } from '../styles/GlobalStyle';

import {
  Box,
  Container,
  Card,
  Text,
  Badge,
  Button,
  Group,
  Tabs,
  Tab,
  TextInput,
  NumberInput,
  MailIcon
} from '@mantine/core';

import { useInputState } from '@mantine/hooks';

function Login() {
  const [firstName, setFirstName] = useInputState('');
  const [lastName, setLastName] = useInputState('');
  const [email, setEmail] = useInputState('');

  const { classes } = globalStyle();
  return (
    <Container className={classes.container}>
      <Box className={classes.flex}>
        <Card
          shadow="md"
          padding="xl"
          style={{ width: "50%" }}
        >
          <Card.Section>
            <Tabs grow>
              <Tab label="Login">

                <Button fullWidth variant="light" color="blue" style={{ marginTop: 14 }}>
                  Login
                </Button>
              </Tab>
              <Tab label="Register">
                <TextInput value={firstName} onChange={setFirstName} />
                <TextInput value={lastName} onChange={setLastName} />
                <TextInput
                  icon={<MailIcon />}
                  placeholder="Your email"
                  value={email}
                  onChange={setEmail}
                />

                <Button fullWidth variant="light" color="blue" style={{ marginTop: 14 }}>
                  Register
                </Button>

              </Tab>
            </Tabs>
          </Card.Section>
        </Card>
      </Box>
    </Container >
  );
}

export default Login;
