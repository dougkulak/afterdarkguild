import React from 'react';
import {Alert, AlertTitle, Divider, Grid, Typography} from '@mui/material';
import {settings, teams} from '../config/config';
import {slugify, useWidth} from '../util';
import Box from '@mui/material/Box';
import Code from '../components/Code';
import {raidTeams} from '../config/teams';
import TeamCard from '../components/TeamCard';
import {isWidthDown, isWidthUp} from '@mui/material/Hidden/withWidth';

const InfoPage = ({team, page}) => {
  const isAll = team.name === teams.ALL;
  const width = useWidth();
  return (
    <div>
      {settings.showWelcomeEditHelp && team.name !== teams.ALL && (
        <React.Fragment>
          <Alert severity="info">
            <AlertTitle>Attention: Team Leaders</AlertTitle>
            This is where you want to keep all of your general team information.
            <br />
            <br />
            To change this content, open{' '}
            <strong>/frontend/src/teams/{slugify(team.name)}.js</strong> and
            edit the <Code>information</Code> key.
          </Alert>
          <Box py={3}>
            <Divider />
          </Box>
        </React.Fragment>
      )}

      {!isAll && isWidthDown('md', width) && (
        <Box mb={3}>
          <TeamCard team={team} />
        </Box>
      )}

      {!isAll && isWidthUp('md', width) && (
        <Box sx={{float: 'right', minWidth: 250}} ml={3} mb={3}>
          <TeamCard team={team} />
        </Box>
      )}

      <Typography variant={'h6'}>
        {isAll ? 'Guild' : `${team.name} Team`} Information
      </Typography>

      <Box>{team.information}</Box>

      {isAll && (
        <>
          <Box py={3}>
            <Divider />
          </Box>

          <Typography variant={'h6'} gutterBottom>
            Raid Teams ({raidTeams.length - 1})
          </Typography>

          <Grid container spacing={2}>
            {raidTeams
              .filter((x) => x.name !== teams.ALL)
              .map((team) => (
                <Grid key={team.name} item xs={12} sm={6} md={4} lg={3}>
                  <TeamCard team={team} />
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default InfoPage;
