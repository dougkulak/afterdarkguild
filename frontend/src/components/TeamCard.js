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
  CircularProgress,
  Divider,
  Grid,
  Stack,
  Tooltip,
} from '@mui/material';
import {styled} from '@mui/styles';
import {MilitaryTech, People} from '@mui/icons-material';
import {encounters, pages, recruitStatuses} from '../config/config';
import {defaultPageData} from '../Layout';
import {getEncounterAbbrev, normalize, slugify} from '../util';
import {useHistory} from 'react-router-dom';

const Item = styled(Box)(({theme}) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{position: 'relative', display: 'inline-flex'}}>
      <CircularProgress
        variant="determinate"
        {...props}
        sx={{color: props.teamcolor}}
      />
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

export default function TeamCard({team}) {
  const history = useHistory();

  const handleCardClick = () => {
    window.scrollTo(0, 0);
    if (window.location.pathname.startsWith(`/${slugify(team.name)}/`)) {
      history.push(`/${slugify(team.name)}/${slugify(pages.RAIDS)}`);
    } else {
      history.push(`/${slugify(team.name)}/${slugify(defaultPageData.name)}`);
    }
  };

  return (
    <Card sx={{textAlign: 'center'}}>
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
          <Box mt={1}>
            <Typography variant="caption" color="text.secondary">
              {team.schedule1}
            </Typography>
          </Box>
          <Typography variant="caption" color="text.secondary">
            {team.schedule2}
          </Typography>
          <br />
          <Typography variant="caption" color="text.secondary">
            <i>{team.description}</i>
          </Typography>

          <Box mt={1}>
            <Divider />
          </Box>

          <Box mt={2}>
            <Grid container spacing={0} justifyContent={'center'}>
              {team.raids
                .filter((raid) =>
                  [
                    encounters.GRUUL,
                    encounters.MAGTHERIDON,
                    encounters.SSC,
                    encounters.TK,
                  ].includes(raid.encounter)
                )
                .map((raid) => {
                  const [currentProgress, maxProgress] =
                    raid.progress.split('/');
                  return (
                    <Grid
                      key={raid.encounter}
                      item
                      xs={3}
                      sx={{textAlign: 'center'}}>
                      <CircularProgressWithLabel
                        value={normalize(currentProgress, maxProgress)}
                        label={raid.progress}
                        size={40}
                        labelvariant={'caption'}
                        teamcolor={team.color}
                      />
                      <br />
                      <Typography variant={'caption'}>
                        {getEncounterAbbrev(raid.encounter)}
                      </Typography>
                    </Grid>
                  );
                })}
            </Grid>
          </Box>

          <Box mt={1}>
            <Box mt={2} mb={2} sx={{textAlign: 'center'}}>
              <Typography variant="caption" color="text.secondary">
                <MilitaryTech
                  fontSize={'small'}
                  sx={{verticalAlign: 'top', mr: 0}}
                />
                {team.leaders.join(', ')}
              </Typography>
            </Box>

            <Divider />
          </Box>
        </CardContent>
        <CardActions style={{justifyContent: 'center'}}>
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
