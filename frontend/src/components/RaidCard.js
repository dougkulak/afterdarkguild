import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  Box,
  CardActionArea,
  CardHeader,
  CircularProgress,
  Divider,
  Stack,
} from '@mui/material';
import {getColorForScore, normalize, slugify} from '../util';
import {useHistory} from 'react-router-dom';

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

export default function RaidCard({team, raid}) {
  const history = useHistory();

  const handleCardClick = () => {
    window.scrollTo(0, 0);
    history.push(`/${slugify(team.name)}/${slugify(raid.encounter)}`);
  };

  const [currentProgress, maxProgress] = raid.progress.split('/');

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
        <CardContent sx={{textAlign: 'center'}}>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            sx={{color: team.color}}>
            {raid.encounter}
          </Typography>

          <CircularProgressWithLabel
            value={normalize(currentProgress, maxProgress)}
            label={raid.progress}
            thickness={5}
            size={100}
          />

          {raid.parses && (
            <React.Fragment>
              <Box pt={2} pb={1}>
                <Divider />
              </Box>

              <Typography variant={'overline'} color={'text.secondary'}>
                Best Parses
              </Typography>

              <br />

              <Stack direction={'row'} spacing={3} justifyContent={'center'}>
                <div>
                  <CircularProgressWithLabel
                    value={raid.parses.bestAvgExecution || 0}
                    label={raid.parses.bestAvgExecution || 0}
                    size={40}
                    labelvariant={'caption'}
                    sx={{
                      color: getColorForScore(raid.parses.bestAvgExecution),
                    }}
                  />
                  <br />
                  <Typography variant={'caption'}>Execution</Typography>
                </div>
                <div>
                  <CircularProgressWithLabel
                    value={raid.parses.bestAvgSpeed || 0}
                    label={raid.parses.bestAvgSpeed || 0}
                    size={40}
                    labelvariant={'caption'}
                    sx={{
                      color: getColorForScore(raid.parses.bestAvgSpeed),
                    }}
                  />
                  <br />
                  <Typography variant={'caption'}>Speed</Typography>
                </div>
                <div>
                  <CircularProgressWithLabel
                    value={0}
                    label={raid.parses.bestTime || 0}
                    size={40}
                    labelvariant={'caption'}
                  />
                  <br />
                  <Typography variant={'caption'}>Time</Typography>
                </div>
              </Stack>
            </React.Fragment>
          )}

          {raid.teams && (
            <React.Fragment>
              <Box pt={2} pb={1}>
                <Divider />
              </Box>

              <Typography variant={'overline'} color={'text.secondary'}>
                Next Raid
              </Typography>

              {raid.teams.map((x) => (
                <div key={x.name}>
                  <Typography variant={'caption'}>
                    {x.nextScheduledRun}
                  </Typography>

                  <Typography variant={'caption'} color={'text.secondary'}>
                    {' '}
                    &mdash; {x.name}
                  </Typography>
                </div>
              ))}
            </React.Fragment>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
