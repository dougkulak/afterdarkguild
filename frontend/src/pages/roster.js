import React, {useEffect, useState} from 'react';
import {
  Avatar,
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

const RosterPage = ({team, page}) => {
  const theme = useTheme();

  const fullTeamRoster = getRosterForTeam(team.name);

  const [roster, setRoster] = useState(fullTeamRoster);
  const [keywords, setKeywords] = useState('');

  const handleKeywordsChange = (e) => {
    setKeywords(e.currentTarget.value);
  };

  const getColorForTeam = (team) => {
    return getRaidTeamDataByName(team).color;
  };

  useEffect(() => {
    const cleanup = (val) => val.trim().toLowerCase();

    setRoster(
      fullTeamRoster.filter((x) =>
        keywords.trim().length > 0
          ? cleanup(x.name).includes(cleanup(keywords))
          : true
      )
    );
  }, [team, keywords]); //eslint-disable-line

  return (
    <div>
      <Box>
        <FormControl fullWidth>
          <InputLabel htmlFor="outlined-adornment-amount">
            Player Filter
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={keywords}
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
                <Avatar />
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
                      {player.race} {player.class}
                    </Typography>
                    <> &nbsp;|&nbsp; </>
                    {player.profession1 || <> &mdash; </>}
                    {' / '}
                    {player.profession2 || <> &mdash; </>}
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
