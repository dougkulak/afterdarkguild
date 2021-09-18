import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  Box,
  CardActionArea,
  CardActions,
  CardHeader,
  Chip,
  Stack,
  Tooltip,
} from '@mui/material';
import {styled} from '@mui/styles';
import {MilitaryTech, People} from '@mui/icons-material';
import {recruitStatuses} from '../config/config';
import {defaultPageData} from '../Layout';
import {slugify} from '../util';
import {useHistory} from 'react-router-dom';

const Item = styled(Box)(({theme}) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function TeamCard({team}) {
  const history = useHistory();

  const handleCardClick = () => {
    history.push(`/${slugify(team.name)}/${slugify(defaultPageData.name)}`);
  };

  return (
    <Card>
      <CardActionArea onClick={handleCardClick}>
        <CardHeader
          component={({children}) => (
            <div style={{height: 4, backgroundColor: team.color}}>
              &nbsp;{children}
            </div>
          )}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{color: team.color}}>
            {team.name}
          </Typography>
          <Chip
            size={'small'}
            label={team.type}
            sx={{mb: 1, border: 'none', cursor: 'pointer'}}
          />
          <br />
          <Typography variant="caption" color="text.secondary">
            {team.schedule1}
          </Typography>
          <br />
          <Typography variant="caption" color="text.secondary">
            {team.schedule2}
          </Typography>
          <br />
          <Typography variant="caption" color="text.secondary">
            <i>{team.description}</i>
          </Typography>
          <br />
          <Box mt={1}>
            <Typography variant="caption" color="text.secondary">
              <MilitaryTech fontSize={'small'} sx={{verticalAlign: 'top'}} />
              {team.leaders.join(', ')}
            </Typography>
          </Box>
        </CardContent>
        <CardActions style={{justifyContent: 'flex-start'}}>
          <Stack direction="row" spacing={0}>
            <Item>
              <Chip
                size={'small'}
                icon={<People />}
                label={team.players.length}
                variant="outlined"
                sx={{ml: 1, mb: 1, mr: 0, pl: 1, cursor: 'pointer'}}
              />
            </Item>
            <Item>
              <Tooltip
                title={team.recruitNeeds ? 'Need: ' + team.recruitNeeds : ''}>
                <Chip
                  size={'small'}
                  label={`${team.recruitStatus}`}
                  variant="outlined"
                  color={
                    team.recruitStatus === recruitStatuses.CLOSED
                      ? 'error'
                      : 'success'
                  }
                  sx={{ml: 0, mb: 1, border: 'none', cursor: 'pointer'}}
                />
              </Tooltip>
            </Item>
          </Stack>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
