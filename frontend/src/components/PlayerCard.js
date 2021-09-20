import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Avatar, ListItem, ListItemAvatar, ListItemText} from '@mui/material';
import {colorTextByClass} from '../util';
import {getRaidTeamDataByName} from '../Layout';
import {makeStyles, useTheme} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  outlined: {
    border: `1px solid rgba(255, 255, 255, 0.12)`,
    borderRadius: theme.shape.borderRadius,
  },
}));

export default function PlayerCard({player, variant}) {
  const theme = useTheme();
  const classes = useStyles();
  const getColorForTeam = (team) => {
    return getRaidTeamDataByName(team).color;
  };

  return (
    <ListItem
      key={player.name}
      className={variant === 'outlined' ? classes.outlined : null}>
      <ListItemAvatar>
        <Avatar src={`/icons/classicon_${player.class.toLowerCase()}.jpg`} />
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
              {colorTextByClass(`${player.spec} ${player.class}`, player.class)}
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
              {player.description}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
