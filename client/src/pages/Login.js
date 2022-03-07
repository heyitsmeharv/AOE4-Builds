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
  InputWrapper,
} from '@mantine/core';

import {
  EnvelopeClosedIcon,
  PersonIcon,
  LockClosedIcon,
} from '@radix-ui/react-icons'

import { useInputState } from '@mantine/hooks';

function Login() {
  const [firstName, setFirstName] = useInputState('');
  const [lastName, setLastName] = useInputState('');
  const [email, setEmail] = useInputState('');
  const [password, setPassword] = useInputState('');
  const [confirmPassword, setConfirmPassword] = useInputState('');

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
                <Box style={{ margin: '12px 24px' }}>
                  <InputWrapper
                    id="email-input"
                    required
                    label="Email"
                  >
                    <TextInput
                      style={{ marginBottom: '12px' }}
                      icon={<EnvelopeClosedIcon />}
                      placeholder="Your email"
                      value={email}
                      onChange={setEmail}
                    />
                  </InputWrapper>
                  <InputWrapper
                    id="password-input"
                    required
                    label="Password"
                  >
                    <TextInput
                      style={{ flex: 1 }} value={password} onChange={setPassword}
                      icon={<LockClosedIcon />}
                      placeholder="Password"
                    />
                  </InputWrapper>
                  <Button fullWidth variant="light" color="blue" style={{ marginTop: 14 }}>
                    Login
                  </Button>
                </Box>
              </Tab>
              <Tab label="Register">
                <Box style={{ margin: '12px 24px' }}>
                  <Box style={{ display: 'flex', marginBottom: '12px' }}>
                    <InputWrapper
                      style={{ width: '100%' }}
                      id="forename-input"
                      required
                      label="First Name"
                    >
                      <TextInput
                        style={{ flex: 1, marginRight: '12px' }} value={firstName} onChange={setFirstName}
                        icon={<PersonIcon />}
                        placeholder="First name"
                      />
                    </InputWrapper>
                    <InputWrapper
                      style={{ width: '100%' }}
                      id="surname-input"
                      required
                      label="Surname"
                    >
                      <TextInput
                        style={{ flex: 1, width: '100%' }} value={lastName} onChange={setLastName}
                        icon={<PersonIcon />}
                        placeholder="Last name"
                      />
                    </InputWrapper>
                  </Box>
                  <InputWrapper
                    id="email-input"
                    required
                    label="Email"
                  >
                    <TextInput
                      style={{ marginBottom: '12px' }}
                      icon={<EnvelopeClosedIcon />}
                      placeholder="Your email"
                      value={email}
                      onChange={setEmail}
                    />
                  </InputWrapper>
                  <Box style={{ display: 'flex', marginBottom: '12px', width: '100%' }}>
                    <InputWrapper
                      style={{ width: '100%' }}
                      id="password-input"
                      required
                      label="Password"
                    >
                      <TextInput
                        style={{ flex: 1, marginRight: '12px' }} value={password} onChange={setPassword}
                        icon={<LockClosedIcon />}
                        placeholder="Password"
                      />
                    </InputWrapper>
                    <InputWrapper
                      style={{ width: '100%' }}
                      id="confirm-password-input"
                      required
                      label="Confirm Password"
                    >
                      <TextInput
                        style={{ flex: 1 }} value={confirmPassword} onChange={setConfirmPassword}
                        icon={<LockClosedIcon />}
                        placeholder="Confirm Password"
                      />
                    </InputWrapper>
                  </Box>
                  <Button fullWidth variant="light" color="blue" style={{ marginTop: 14 }}>
                    Register
                  </Button>
                </Box>
              </Tab>
            </Tabs>
          </Card.Section>
        </Card>
      </Box>
    </Container >
  );
}

export default Login;
