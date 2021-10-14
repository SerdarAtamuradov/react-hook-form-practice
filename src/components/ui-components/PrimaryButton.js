import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const PrimaryButton = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Button className={styles.root} type="submit" variant="contained" fullWidth color="primary" {...props}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
