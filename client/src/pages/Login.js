import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { globalStyle } from '../styles/GlobalStyle';

import { AuthContext } from '../context/auth';

import {
  Box,
  Container,
  Card,
  Button,
  Tabs,
  Tab,
  TextInput,
  PasswordInput,
  InputWrapper,
  LoadingOverlay
} from '@mantine/core';

import {
  EnvelopeClosedIcon,
  PersonIcon,
  LockClosedIcon,
} from '@radix-ui/react-icons'

function Login() {
  const context = useContext(AuthContext);
  let navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [registerErrors, setRegisterErrors] = useState({});
  const [loginErrors, setLoginErrors] = useState({});

  const onChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const onSubmitRegister = event => {
    event.preventDefault();
    addUser();
  };

  const onSubmitLogin = event => {
    event.preventDefault();
    loginUser();
  }

  const [addUser, { loading: registerLoading }] = useMutation(REGISTER_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      navigate("/");
    },
    onError(err) {
      setRegisterErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: values
  });

  const [loginUser, { loading: loginLoading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      navigate("/");
    },
    onError(err) {
      setLoginErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: values
  });

  const { classes } = globalStyle();
  return (
    <Container className={classes.container}>
      <Box className={classes.flex}>
        <Box sx={{ width: '50%', position: 'relative' }}>
          <LoadingOverlay visible={registerLoading || loginLoading} />
          <Card
            shadow="md"
            padding="xl"
          >
            <Card.Section>
              <Tabs
                grow
              >
                <Tab
                  label="Login"
                  sx={{ minHeight: '50px' }}
                >
                  <Box sx={{ margin: '12px 24px' }}>
                    <InputWrapper
                      id="username-input"
                      required
                      label="Username"
                      sx={{ lineHeight: '2.5' }}
                    >
                      <TextInput
                        name="username"
                        sx={{ marginBottom: '12px' }}
                        icon={<PersonIcon />}
                        placeholder="Username"
                        value={values.username}
                        onChange={onChange}
                        error={loginErrors?.username ? loginErrors.username : false}
                      />
                    </InputWrapper>
                    <InputWrapper
                      id="password-input"
                      required
                      label="Password"
                      sx={{ lineHeight: '2.5' }}
                    >
                      <PasswordInput
                        name="password"
                        sx={{ flex: 1 }} value={values.password}
                        icon={<LockClosedIcon />}
                        placeholder="Password"
                        onChange={onChange}
                        error={loginErrors?.password ? loginErrors.password : false}
                      />
                    </InputWrapper>
                    <Button onClick={onSubmitLogin} type="submit" fullWidth variant="light" color="blue" sx={{ marginTop: '8%' }}>
                      Login
                    </Button>
                  </Box>
                </Tab>
                <Tab
                  label="Register"
                  sx={{ minHeight: '50px' }}
                >
                  <Box sx={{ margin: '12px 24px' }}>
                    <InputWrapper
                      id="username-input"
                      required
                      label="Username"
                      sx={{ lineHeight: '2.5' }}
                    >
                      <TextInput
                        name="username"
                        sx={{ marginBottom: '12px' }}
                        icon={<PersonIcon />}
                        placeholder="Username"
                        value={values.username}
                        onChange={onChange}
                        error={registerErrors?.username ? registerErrors.username : false}
                      />
                    </InputWrapper>
                    <InputWrapper
                      id="email-input"
                      required
                      label="Email"
                      sx={{ lineHeight: '2.5' }}
                    >
                      <TextInput
                        name="email"
                        sx={{ marginBottom: '12px' }}
                        icon={<EnvelopeClosedIcon />}
                        placeholder="Your email"
                        value={values.email}
                        onChange={onChange}
                        error={registerErrors?.email ? registerErrors.email : false}
                      />
                    </InputWrapper>
                    <Box sx={{ display: 'flex', marginBottom: '12px', width: '100%' }}>
                      <InputWrapper
                        sx={{ width: '100%', lineHeight: '2.5' }}
                        id="password-input"
                        required
                        label="Password"
                      >
                        <PasswordInput
                          name="password"
                          sx={{ flex: 1, marginRight: '12px' }} value={values.password}
                          icon={<LockClosedIcon />}
                          placeholder="Password"
                          onChange={onChange}
                          error={registerErrors?.password ? registerErrors.password : false}
                        />
                      </InputWrapper>
                      <InputWrapper
                        sx={{ width: '100%', lineHeight: '2.5' }}
                        id="confirm-password-input"
                        required
                        label="Confirm Password"
                      >
                        <PasswordInput
                          name="confirmPassword"
                          sx={{ flex: 1 }} value={values.confirmPassword}
                          icon={<LockClosedIcon />}
                          placeholder="Confirm Password"
                          onChange={onChange}
                          error={registerErrors?.confirmPassword ? registerErrors.confirmPassword : false}
                        />
                      </InputWrapper>
                    </Box>
                    <Button onClick={onSubmitRegister} type="submit" fullWidth variant="light" color="blue" sx={{ marginTop: 14 }}>
                      Register
                    </Button>
                  </Box>
                </Tab>
              </Tabs>
            </Card.Section>
          </Card>
        </Box>
      </Box>
    </Container >
  );
}

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Login;
