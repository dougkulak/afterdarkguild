import React from 'react';
import {Alert, AlertTitle, Divider, Grid, Typography} from '@mui/material';
import {settings, teams} from '../config/config';
import {slugify} from '../util';
import Box from '@mui/material/Box';
import Code from '../components/Code';
import {raidTeams} from '../config/teams';
import TeamActionCard from '../components/TeamActionCard';

const InfoPage = ({team, page}) => {
  const isAll = team.name === teams.ALL;

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
                  <TeamActionCard team={team} />
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default InfoPage;
