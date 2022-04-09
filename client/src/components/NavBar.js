import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { globalStyle } from '../styles/GlobalStyle';

import { AuthContext } from '../context/auth';

import { Avatar, Group, Button, Text, Menu, MenuItem, UnstyledButton, } from '@mantine/core';

import { ChevronRightIcon, ExitIcon } from '@radix-ui/react-icons';

function NavBar() {
  const { user, logout } = useContext(AuthContext)
  const { classes, cx } = globalStyle();
  const [active, setActive] = useState(0);

  const navBar = !user ? (
    <>
      <Button
        className={cx(classes.button, { [classes.active]: active === 0 })}
        onClick={() => setActive(0)}
        component={Link}
        to="/"
      >
        Home
      </Button>
      <Button
        className={cx(classes.button, { [classes.active]: active === 1 })}
        onClick={() => setActive(1)}
        component={Link}
        to="/login"
        sx={{
          marginLeft: 'auto',
        }}
      >
        Login/Register
      </Button>
    </>
  ) : (
    <>
      <Button
        className={cx(classes.button, { [classes.active]: active === 0 })}
        onClick={() => setActive(0)}
        component={Link}
        to="/"
      >
        Home
      </Button>
      <Button
        className={cx(classes.button, { [classes.active]: active === 1 })}
        onClick={() => setActive(1)}
        component={Link}
        to="/builds"
      >
        Builds
      </Button>
      <Menu
        sx={{
          marginLeft: 'auto',
          background: '#EFEFEF',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        withArrow
        placement="center"
        control={
          <UnstyledButton
            sx={(theme) => ({
              display: 'block',
              width: '250px',
              padding: theme.spacing.md,
              color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
              '&:hover': {
                borderRadius: '8px',
                backgroundColor: '#ffdf91',
                color: '#003366',
              }

            })}
          >
            <Group>
              <Avatar size="md" radius="xl" />
              <div style={{ flex: 1 }}>
                <Text color="#003366" size="sm" weight={500}>
                  {user.username}
                </Text>

                <Text color="dimmed" size="xs">
                  {user.email}
                </Text>
              </div>
              {<ChevronRightIcon size={16} />}
            </Group>
          </UnstyledButton>
        }
      >
        <MenuItem
          onClick={logout}
          component={Link}
          to="/login"
          icon={<ExitIcon size={16} />}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  )

  return (
    <div className={classes.navbar}>
      {navBar}
    </div>
  )
}

export default NavBar;