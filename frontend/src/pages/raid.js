import React from 'react';
import {
  Alert,
  AlertTitle,
  Divider,
  Grid,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import {settings, teams} from '../config/config';
import {colorTextByClass, slugify} from '../util';
import Box from '@mui/material/Box';
import Code from '../components/Code';
import {useParams} from 'react-router-dom';
import {getPlayerDataByName, unknownPlayer} from '../config/players';

const RaidPage = ({team, page}) => {
  const isAll = team.name === teams.ALL;

  const params = useParams();

  const raid = team.raids.find(
    (x) => slugify(x.encounter) === slugify(params.raid)
  );

  if (!raid) {
    return <React.Fragment />;
  }

  const normalise = (value, max) => ((value - 1) * 100) / (max - 1);

  const [currentProgress, maxProgress] = raid.progress.split('/');

  return (
    <div>
      {settings.showRaidEditHelp && team.name !== teams.ALL && (
        <React.Fragment>
          <Alert severity="info">
            <AlertTitle>Attention: Team Leaders</AlertTitle>
            This is where you want to keep guides, schedules, groups, and
            instructions for your raid encounters.
            <br />
            <br />
            To change this content, open{' '}
            <strong>/frontend/src/teams/{slugify(team.name)}.js</strong> and
            edit the <Code>raids</Code> key.
          </Alert>
          <Box py={3}>
            <Divider />
          </Box>
        </React.Fragment>
      )}

      <Typography variant={'h6'} sx={{mb: 2}}>
        {isAll ? 'After Dark' : `${team.name} Team`} Raid: {page.name}
      </Typography>

      <Typography variant={'overline'} color={'primary'}>
        Progression
      </Typography>

      <Box sx={{display: 'flex', alignItems: 'center', mb: 3}}>
        <Box sx={{width: '100%', mr: 1}}>
          <LinearProgress
            variant="determinate"
            value={normalise(currentProgress, maxProgress)}
            sx={{height: 24, borderRadius: 4}}
          />
        </Box>
        <Box sx={{minWidth: 100}}>
          <Typography variant="body2" color="text.secondary">
            {currentProgress}/{maxProgress} Bosses
          </Typography>
        </Box>
      </Box>

      {raid.teams && (
        <React.Fragment>
          <Typography variant={'overline'} color={'primary'} gutterBottom>
            Teams
          </Typography>

          <Grid container spacing={2}>
            {raid.teams.map((raidTeam) => (
              <Grid item key={raidTeam.name} xs={12} md={6} lg={4}>
                <TableContainer component={Paper}>
                  <Table size={'small'}>
                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={2} align={'center'}>
                          <Typography variant={'caption'}>
                            {raidTeam.name}
                          </Typography>
                          <br />
                          <Typography
                            variant={'caption'}
                            color={'text.secondary'}>
                            Next Raid: {raidTeam.nextScheduledRun}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {raidTeam.players &&
                        raidTeam.players.map((playerString, i) => {
                          const [playerName, role] = playerString.split(' as ');
                          const player = getPlayerDataByName(playerName) || {
                            ...unknownPlayer,
                            name: playerName,
                          };

                          player.role = role;

                          return (
                            <TableRow key={player.name}>
                              <TableCell>
                                {i === 0 && '👑'}
                                {colorTextByClass(
                                  `${player.name}`,
                                  player.class
                                )}
                              </TableCell>
                              <TableCell component={'th'} scope={'row'}>
                                <Typography
                                  color={'text.secondary'}
                                  variant={'caption'}>
                                  {player.role}
                                </Typography>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            ))}

            <Box p={2}>
              <Typography variant={'caption'} color={'text.secondary'}>
                Message 👑 for invites.
              </Typography>
            </Box>
          </Grid>
        </React.Fragment>
      )}

      <Typography variant={'overline'} color={'primary'}>
        Strategy
      </Typography>

      <Typography variant={'body1'} component={'div'}>
        {raid.strategy}
      </Typography>
    </div>
  );
};

export default RaidPage;
