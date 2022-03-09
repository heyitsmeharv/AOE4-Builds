import { createStyles } from '@mantine/core';

export const globalStyle = createStyles((theme, _params, _) => {
  return {
    container: {
      backgroundColor: '#EFEFEF',
      maxWidth: '100%',
      height: 'calc(100vh - 122px)',
      padding: '24px'
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    },
    navbar: {
      backgroundColor: '#003366',
      minHeight: '50px',
      maxWidth: '100%',
      display: 'flex',
      alignItems: 'center',
      borderTop: '2px solid #ffdf91',
      borderBottom: '2px solid #ffdf91',
      padding: '0 2%'
    },
    button: {
      color: 'white',
      backgroundColor: '#336699',
      borderRadius: '8px',
      margin: theme.spacing.xs,
      height: "50px",
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: '#ffdf91',
        color: '#003366',
      }
    },
    active: {
      backgroundColor: '#ffdf91',
      color: '#003366',
      borderBottom: '2px solid white',
    },
  };
});
