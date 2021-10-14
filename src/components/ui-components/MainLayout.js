import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
function MainLayout({ children, ...props }) {
  const styles = useStyles();
  return (
    <Container className={styles.root} container="main" maxWidth="xs" {...props}>
      {children}
    </Container>
  );
}

export default MainLayout;
