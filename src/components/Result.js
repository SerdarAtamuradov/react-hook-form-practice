import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useData } from '../DataContext';
import MainLayout from './ui-components/MainLayout';
import PrimaryButton from './ui-components/PrimaryButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Result() {
  const styles = useStyles();
  const history = useHistory();
  const { data } = useData();
  const entries = Object.entries(data);

  return (
    <MainLayout>
      <Typography component="h2" variant="h5">
        Form Values
      </Typography>
      <TableContainer className={styles.root} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fields</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map(entry => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align="right">{entry[1]?.toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <PrimaryButton onClick={() => history.push('/')}>Go back</PrimaryButton>
    </MainLayout>
  );
}

export default Result;
