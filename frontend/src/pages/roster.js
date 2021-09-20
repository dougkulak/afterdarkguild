import React, {useEffect, useState} from 'react';
import {
  Alert,
  AlertTitle,
  CardActionArea,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  List,
  OutlinedInput,
  Paper,
  Typography,
} from '@mui/material';

import {getRosterForTeam} from '../config/players';
import Box from '@mui/material/Box';
import {Info, Search as SearchIcon} from '@mui/icons-material';
import {settings, teams} from '../config/config';
import {slugify} from '../util';
import Code from '../components/Code';
import PlayerCard from '../components/PlayerCard';
import {useHistory} from 'react-router-dom';
import Card from '@mui/material/Card';

const RosterPage = ({team, page}) => {
  const isAll = team.name === teams.ALL;
  const history = useHistory();

  const fullTeamRoster = getRosterForTeam(team.name);

  const [roster, setRoster] = useState(fullTeamRoster);
  const [keywords, setKeywords] = useState('');

  const switchToPlayer = (player) => {
    window.scrollTo(0, 0);
    history.push(`/players/${slugify(player.name)}`);
  };

  const handleKeywordsChange = (e) => {
    setKeywords(e.currentTarget.value);
  };

  const cleanup = (val) => {
    if (!val) return '';
    return val.trim().toLowerCase();
  };

  const doKeywordsMatchPlayer = (player, keywords) => {
    const nameMatches = cleanup(player.name).includes(cleanup(keywords));
    const teamMatches = cleanup(player.team).includes(cleanup(keywords));
    const rankMatches = cleanup(player.rank).includes(cleanup(keywords));
    const raceMatches = cleanup(player.race).includes(cleanup(keywords));
    const classMatches = cleanup(player.class).includes(cleanup(keywords));
    const prof1Matches = cleanup(player.profession1).includes(
      cleanup(keywords)
    );
    const prof2Matches = cleanup(player.profession2).includes(
      cleanup(keywords)
    );
    const descriptionMatches = cleanup(player.description).includes(
      cleanup(keywords)
    );

    return (
      nameMatches ||
      teamMatches ||
      rankMatches ||
      raceMatches ||
      classMatches ||
      prof1Matches ||
      prof2Matches ||
      descriptionMatches
    );
  };

  useEffect(() => {
    setRoster(
      fullTeamRoster.filter((player) =>
        keywords.trim().length > 0
          ? doKeywordsMatchPlayer(player, keywords)
          : true
      )
    );
  }, [team, keywords]); //eslint-disable-line

  return (
    <div>
      {settings.showRosterEditHelp && team.name !== teams.ALL && (
        <React.Fragment>
          <Alert severity="info">
            <AlertTitle>Attention: Team Leaders</AlertTitle>
            This should always be kept up-to-date to reflect current team
            members.
            <br />
            <br />
            To change the roster, open{' '}
            <strong>/frontend/src/teams/{slugify(team.name)}.js</strong> and
            edit the <Code>players</Code> key.
          </Alert>
          <Box py={3}>
            <Divider />
          </Box>
        </React.Fragment>
      )}

      <Typography variant={'h6'} gutterBottom>
        {isAll ? 'After Dark' : `${team.name} Team`} Roster ({roster.length})
      </Typography>

      <Box pt={2}>
        <FormControl fullWidth>
          <InputLabel htmlFor="outlined-adornment-amount">
            Player Filter
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={keywords}
            placeholder={
              'Search name, team, rank, race, class, profession, and description'
            }
            onChange={handleKeywordsChange}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            label="Player Filter"
          />
        </FormControl>
      </Box>
      <List sx={{width: '100%'}}>
        {roster.length === 0 && (
          <Paper elevation={0} variant="outlined">
            <Typography variant={'subtitle1'} sx={{m: 2}}>
              <Info sx={{verticalAlign: 'top', mr: 2}} />
              No players found matching the keywords "{keywords}".
            </Typography>
          </Paper>
        )}
        {roster.map((player) => (
          <Card
            key={player.name}
            sx={{mt: 1}}
            style={{background: 'none', boxShadow: 'none'}}>
            <CardActionArea onClick={() => switchToPlayer(player)}>
              <PlayerCard player={player} />
            </CardActionArea>
          </Card>
        ))}
      </List>
    </div>
  );
};

export default RosterPage;
