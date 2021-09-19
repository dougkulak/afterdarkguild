import React, {useEffect, useState} from 'react';
import {
  Alert,
  AlertTitle,
  Avatar,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  OutlinedInput,
  Paper,
  Typography,
} from '@mui/material';

import {getRosterForTeam} from '../config/players';
import {useTheme} from '@mui/styles';
import Box from '@mui/material/Box';
import {Info, Search as SearchIcon} from '@mui/icons-material';
import {getRaidTeamDataByName} from '../Layout';
import {settings, teams} from '../config/config';
import {colorTextByClass, slugify} from '../util';
import Code from '../components/Code';

const RosterPage = ({team, page}) => {
  const theme = useTheme();
  const isAll = team.name === teams.ALL;

  const fullTeamRoster = getRosterForTeam(team.name);

  const [roster, setRoster] = useState(fullTeamRoster);
  const [keywords, setKeywords] = useState('');

  const handleKeywordsChange = (e) => {
    setKeywords(e.currentTarget.value);
  };

  const getColorForTeam = (team) => {
    return getRaidTeamDataByName(team).color;
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
    const notesMatches = cleanup(player.notes).includes(cleanup(keywords));

    return (
      nameMatches ||
      teamMatches ||
      rankMatches ||
      raceMatches ||
      classMatches ||
      prof1Matches ||
      prof2Matches ||
      notesMatches
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
              'Search name, team, rank, race, class, profession, and notes'
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
        {roster.map((player) => {
          return (
            <ListItem key={player.name}>
              <ListItemAvatar>
                <Avatar
                  src={`/icons/classicon_${player.class.toLowerCase()}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{display: 'inline', marginRight: theme.spacing(1)}}
                      variant={'h6'}>
                      {player.name}
                    </Typography>
                    <Typography variant={'caption'} color={'textSecondary'}>
                      [{player.rank}]
                    </Typography>
                  </React.Fragment>
                }
                secondaryTypographyProps={{component: 'div'}}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: 'inline',
                        color: getColorForTeam(player.team),
                      }}
                      component="span"
                      variant="body2">
                      {player.team}
                    </Typography>
                    <> &nbsp;|&nbsp; </>
                    <Typography
                      sx={{display: 'inline'}}
                      component="span"
                      variant="body2"
                      color="text.primary">
                      {player.race}{' '}
                      {colorTextByClass(
                        `${player.spec} ${player.class}`,
                        player.class
                      )}
                    </Typography>
                    <> &nbsp;|&nbsp; </>
                    {player.profession1 ? (
                      `${player.profession1} (${player.profession1skill})`
                    ) : (
                      <> &mdash; </>
                    )}
                    {' / '}
                    {player.profession2 ? (
                      `${player.profession2} (${player.profession2skill})`
                    ) : (
                      <> &mdash; </>
                    )}
                    <br />
                    <Typography variant={'caption'} color={'textSecondary'}>
                      {player.notes}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default RosterPage;
