import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { globalStyle } from '../styles/GlobalStyle';

import { AuthContext } from '../context/auth';

import { Button } from '@mantine/core';

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
        to="/"
      >
        Builds
      </Button>
      <Button
        className={cx(classes.button, { [classes.active]: active === 2 })}
        onClick={logout}
        component={Link}
        to="/login"
        sx={{
          marginLeft: 'auto',
        }}
      >
        Logout
      </Button>
    </>
  )

  return (
    <div className={classes.navbar}>
      {navBar}
    </div>
  )
}

export default NavBar;