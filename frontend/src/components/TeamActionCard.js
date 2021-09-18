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
} from '@mui/material';
import {styled} from '@mui/styles';
import {People} from '@mui/icons-material';
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

export default function TeamActionCard({team}) {
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
        <CardContent sx={{minHeight: 150}}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{color: team.color}}>
            {team.name}
          </Typography>
          <Chip size={'small'} label={team.type} sx={{mb: 1, border: 'none'}} />
          <Typography variant="body2" color="text.secondary">
            {team.description}
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent: 'flex-start'}}>
          <Stack direction="row" spacing={0}>
            <Item>
              <Chip
                size={'small'}
                icon={<People />}
                label={team.players.length}
                variant="outlined"
                sx={{ml: 1, mb: 1, mr: 0, pl: 1}}
              />
            </Item>
            <Item>
              <Chip
                size={'small'}
                label={team.recruitStatus}
                variant="outlined"
                color={
                  team.recruitStatus === recruitStatuses.CLOSED
                    ? 'error'
                    : 'success'
                }
                sx={{ml: 0, mb: 1, border: 'none'}}
              />
            </Item>
          </Stack>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
