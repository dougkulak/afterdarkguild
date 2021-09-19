import React from 'react';
import {Alert, AlertTitle, Divider, Paper, Typography} from '@mui/material';
import {settings, teams} from '../config/config';
import {slugify} from '../util';
import Box from '@mui/material/Box';
import Code from '../components/Code';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  rules: {
    '& li': {
      padding: theme.spacing(1),
    },
  },
}));

const RulesPage = ({team, page}) => {
  const classes = useStyles();

  const isAll = team.name === teams.ALL;

  return (
    <div>
      {settings.showRulesEditHelp && team.name !== teams.ALL && (
        <React.Fragment>
          <Alert severity="info">
            <AlertTitle>Attention: Team Leaders</AlertTitle>
            This is where you want to keep all of your rules.
            <br />
            <br />
            To change this content, open{' '}
            <strong>/frontend/src/teams/{slugify(team.name)}.js</strong> and
            edit the <Code>rules</Code> key.
          </Alert>
          <Box py={3}>
            <Divider />
          </Box>
        </React.Fragment>
      )}

      <Typography variant={'h6'}>
        {isAll ? 'After Dark' : `${team.name} Team`} Rules
      </Typography>

      <ol className={classes.rules}>
        {team.rules.map((rule, i) => (
          <li key={i}>
            <Paper elevation={0}>{rule}</Paper>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RulesPage;
