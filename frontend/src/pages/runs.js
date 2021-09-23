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
import {useHistory, useParams} from 'react-router-dom';
import {getPlayerDataByName, unknownPlayer} from '../config/players';
import RaidCard from '../components/RaidCard';
import {isWidthDown} from '@mui/material/Hidden/withWidth';
import Link from '@mui/material/Link';
import {RaidTopNav} from '../components/RaidTopNav';
import {LoggedRunTable} from '../components/LoggedRunTable';

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

const RunsPage = ({team, page}) => {
  const isAll = team.name === teams.ALL;
  const history = useHistory();

  const teamLoggedRuns = team.raids
    .map((raidTeamRaids) => raidTeamRaids.loggedRuns || [])
    .flat();

  const switchToPlayer = (player) => {
    window.scrollTo(0, 0);
    history.push(`/players/${slugify(player.name)}`);
  };

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
