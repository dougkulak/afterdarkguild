import React from 'react';
import {makeStyles} from '@mui/styles';
import Breadcrumbs from './Breadcrumbs';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 3),
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid rgba(255, 255, 255, 0.12)`,
  },
}));

export function TeamTopNav({team, page}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs team={team} page={page} />
    </div>
  );
}
