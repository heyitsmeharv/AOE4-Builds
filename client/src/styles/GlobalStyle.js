import { createStyles } from '@mantine/core';

export const globalStyle = createStyles((theme, _params, _) => {
  return {
    container: {
      backgroundColor: '#336699',
      maxWidth: '100%',
      height: 'calc(100vh - 152px)',
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
      minHeight: '100px',
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
      borderRadius: theme.radius.md,
      margin: theme.spacing.xs,
      padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
      height: "50px",
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: '#ffdf91',
        color: '#003366',
      },

      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        fontSize: theme.fontSizes.xs,
      },

      [`@media (max-width: ${theme.breakpoints.md}px)`]: {
        fontSize: theme.fontSizes.md,
      },

      [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
        fontSize: theme.fontSizes.lg,
      },

      [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
        fontSize: theme.fontSizes.xl,
      }
    },
    active: {
      backgroundColor: '#ffdf91',
      color: '#003366',
    },
  };
});
