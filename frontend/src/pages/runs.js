import React from 'react';
import {Alert, AlertTitle, Divider, Typography} from '@mui/material';
import {settings, teams} from '../config/config';
import {slugify} from '../util';
import Box from '@mui/material/Box';
import Code from '../components/Code';
import {LoggedRunTable} from '../components/LoggedRunTable';

const RunsPage = ({team, page}) => {
  const isAll = team.name === teams.ALL;

  const teamLoggedRuns = team.raids
    .map((raidTeamRaids) => raidTeamRaids.loggedRuns || [])
    .flat();

  return (
    <Box>
      {settings.showRunsEditHelp && team.name !== teams.ALL && (
        <React.Fragment>
          <Alert severity="info">
            <AlertTitle>Attention: Team Leaders</AlertTitle>
            This is where you want to keep a log of your raid runs.
            <br />
            <br />
            To change this content, open{' '}
            <strong>/frontend/src/teams/{slugify(team.name)}.js</strong> and
            edit the <Code>raids.loggedRuns</Code> key.
          </Alert>
          <Box py={3}>
            <Divider />
          </Box>
        </React.Fragment>
      )}

      <Typography variant={'h6'} sx={{mb: 2}}>
        {isAll ? 'After Dark' : `${team.name} Team`} {page.name}
      </Typography>

      {teamLoggedRuns && (
        <Box pb={2}>
          <Typography variant={'overline'} color={'primary'}>
            Logged Runs
          </Typography>

          <LoggedRunTable runs={teamLoggedRuns} />
        </Box>
      )}
    </Box>
  );
};

export default RunsPage;
