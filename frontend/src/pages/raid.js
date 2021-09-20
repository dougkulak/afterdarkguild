import React from 'react';
import {
  Alert,
  AlertTitle,
  CircularProgress,
  Divider,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import {encounters, settings, teams} from '../config/config';
import {
  colorTextByClass,
  getColorForScore,
  normalize,
  slugify,
  useWidth,
} from '../util';
import Box from '@mui/material/Box';
import Code from '../components/Code';
import {useParams} from 'react-router-dom';
import {getPlayerDataByName, unknownPlayer} from '../config/players';
import RaidCard from '../components/RaidCard';
import {isWidthDown} from '@mui/material/Hidden/withWidth';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{position: 'relative', display: 'inline-flex'}}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Typography
          variant={props.labelvariant || 'h6'}
          component="div"
          color="text.secondary">
          {props.label}
        </Typography>
      </Box>
    </Box>
  );
}

const RaidPage = ({team, page}) => {
  const isAll = team.name === teams.ALL;
  const width = useWidth();
  const params = useParams();

  const raid = team.raids.find(
    (x) => slugify(x.encounter) === slugify(params.raid)
  );

  if (!raid) {
    return <React.Fragment />;
  }

  const [currentProgress, maxProgress] = raid.progress.split('/');
  const isAllRaids = raid.encounter === encounters.ALL;
  const raidNoun = isAllRaids ? 'Raids' : 'Bosses';

  return (
    <Box>
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
            value={normalize(currentProgress, maxProgress)}
            sx={{height: 24, borderRadius: 4}}
          />
        </Box>
        <Box sx={{minWidth: 100}}>
          <Typography variant="body2" color="text.secondary">
            {currentProgress}/{maxProgress} {raidNoun}
          </Typography>
        </Box>
      </Box>

      {isAllRaids && (
        <>
          <Typography variant={'overline'} color={'primary'} gutterBottom>
            Raids ({team.raids.length - 1})
          </Typography>

          <Grid container spacing={2}>
            {team.raids
              .filter((x) => x.encounter !== encounters.ALL)
              .map((raid) => (
                <Grid key={raid.encounter} item xs={12} md={6} lg={4}>
                  <RaidCard team={team} raid={raid} />
                </Grid>
              ))}
          </Grid>
        </>
      )}

      {!isAllRaids && raid.parses && (
        <React.Fragment>
          <Typography variant={'overline'} color={'primary'}>
            Best Parses
          </Typography>

          <br />

          <Stack
            direction={'row'}
            spacing={isWidthDown('md', width) ? 4 : 10}
            justifyContent={'center'}>
            <div style={{textAlign: 'center'}}>
              <CircularProgressWithLabel
                value={raid.parses.bestAvgExecution || 0}
                label={raid.parses.bestAvgExecution || 0}
                size={isWidthDown('md', width) ? 50 : 100}
                sx={{
                  color: getColorForScore(raid.parses.bestAvgExecution),
                }}
              />
              <br />
              <Typography variant={'caption'}>Execution</Typography>
            </div>
            <div style={{textAlign: 'center'}}>
              <CircularProgressWithLabel
                value={raid.parses.bestAvgSpeed || 0}
                label={raid.parses.bestAvgSpeed || 0}
                size={isWidthDown('md', width) ? 50 : 100}
                sx={{
                  color: getColorForScore(raid.parses.bestAvgSpeed),
                }}
              />
              <br />
              <Typography variant={'caption'}>Speed</Typography>
            </div>
            <div style={{textAlign: 'center'}}>
              <CircularProgressWithLabel
                value={0}
                label={raid.parses.bestTime || 0}
                size={isWidthDown('md', width) ? 50 : 100}
              />
              <br />
              <Typography variant={'caption'}>Time</Typography>
            </div>
          </Stack>
        </React.Fragment>
      )}

      {raid.teams && (
        <Box mb={2}>
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

            <div style={{width: '100%', height: 0}}>&nbsp;</div>

            <Box p={2}>
              <Typography variant={'caption'} color={'text.secondary'}>
                Message 👑 for invites.
              </Typography>
            </Box>
          </Grid>
        </Box>
      )}

      <Box mt={2}>
        <Typography variant={'overline'} color={'primary'}>
          Strategy
        </Typography>
      </Box>

      <Typography variant={'body1'} component={'div'}>
        {raid.strategy}
      </Typography>
    </Box>
  );
};

export default RaidPage;
