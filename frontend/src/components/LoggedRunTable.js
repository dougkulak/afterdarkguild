import {
  Button,
  Chip,
  CircularProgress,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import {colorTextByClass, getColorForScore, slugify} from '../util';
import {ExitToApp, YouTube} from '@mui/icons-material';
import {getPlayerDataByName} from '../config/players';
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

export function LoggedRunTable({runs}) {
  const history = useHistory();

  return (
    <TableContainer component={Paper}>
      <Table size={'small'}>
        <TableHead>
          <TableRow>
            <TableCell align={'center'}>
              <Typography variant={'body2'} align={'center'}>
                Week
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant={'body2'}>Date</Typography>
            </TableCell>
            <TableCell
              align={'center'}
              sx={{
                display: {
                  xs: 'none',
                  lg: 'table-cell',
                },
              }}>
              <Typography variant={'body2'}>Kills</Typography>
            </TableCell>
            <TableCell align={'center'}>
              <Typography variant={'body2'}>VOD</Typography>
            </TableCell>
            <TableCell align={'center'}>
              <Typography variant={'body2'}>Parse</Typography>
            </TableCell>
            <TableCell
              align={'center'}
              sx={{
                display: {
                  xs: 'none',
                  md: 'table-cell',
                },
              }}>
              <Typography variant={'body2'}>Attendees</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {runs.map((run, i) => (
            <TableRow key={i}>
              <TableCell align={'center'}>
                <Typography variant={'caption'}>{run.week}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant={'caption'}>
                  {new Date(run.date).toLocaleDateString()}
                </Typography>
              </TableCell>
              <TableCell
                align={'center'}
                sx={{
                  display: {
                    xs: 'none',
                    lg: 'table-cell',
                  },
                }}>
                <Table size={'small'}>
                  <TableBody>
                    {run.kills.map((kill, i) => (
                      <TableRow key={i}>
                        <TableCell sx={{border: 'none', maxWidth: 90}}>
                          {kill.boss}
                        </TableCell>
                        <TableCell sx={{border: 'none'}}>
                          <Grid container spacing={1}>
                            <Tooltip title={'Execution'}>
                              <Grid item xs={4} sx={{textAlign: 'center'}}>
                                <CircularProgressWithLabel
                                  value={kill.execution}
                                  label={kill.execution}
                                  size={40}
                                  labelvariant={'caption'}
                                  sx={{
                                    color: getColorForScore(kill.execution),
                                  }}
                                />
                              </Grid>
                            </Tooltip>
                            <Tooltip title={'Speed'}>
                              <Grid item xs={4} sx={{textAlign: 'center'}}>
                                <CircularProgressWithLabel
                                  value={kill.speed}
                                  label={kill.speed}
                                  size={40}
                                  labelvariant={'caption'}
                                  sx={{
                                    color: getColorForScore(kill.speed),
                                  }}
                                />
                              </Grid>
                            </Tooltip>
                            <Tooltip title={'Time'}>
                              <Grid item xs={4} sx={{textAlign: 'center'}}>
                                <CircularProgressWithLabel
                                  value={0}
                                  label={kill.time}
                                  size={40}
                                  labelvariant={'caption'}
                                />
                              </Grid>
                            </Tooltip>
                          </Grid>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableCell>
              <TableCell align={'center'}>
                {run.youtubeLink && (
                  <Typography variant={'caption'}>
                    <Tooltip title={'View on YouTube'}>
                      <Button
                        size={'small'}
                        href={run.youtubeLink}
                        target={'_blank'}>
                        <YouTube />
                      </Button>
                    </Tooltip>
                  </Typography>
                )}
              </TableCell>
              <TableCell align={'center'}>
                <Typography variant={'caption'}>
                  <Tooltip title={'View on Warcraft Logs'}>
                    <Button
                      size={'small'}
                      href={run.warcraftLogsLink}
                      target={'_blank'}>
                      <ExitToApp />
                    </Button>
                  </Tooltip>
                </Typography>
              </TableCell>
              <TableCell
                align={'center'}
                sx={{
                  display: {
                    xs: 'none',
                    md: 'table-cell',
                  },
                }}>
                <Tooltip
                  title={
                    <div>
                      {run.attendees.map((player, i) => {
                        const playerData = getPlayerDataByName(player);
                        return (
                          <Chip
                            size={'small'}
                            sx={{
                              m: '2px',
                              borderRadius: '2px',
                              backgroundColor: '#333',
                              cursor: 'pointer',
                            }}
                            onClick={() => {
                              window.scrollTo(0, 0);
                              history.push(`/players/${slugify(player)}`);
                            }}
                            key={i}
                            label={colorTextByClass(
                              player,
                              playerData?.class || 'Unknown'
                            )}
                          />
                        );
                      })}
                    </div>
                  }>
                  <Button size={'small'} color={'inherit'}>
                    <Typography variant={'caption'}>
                      {run.attendees.length}
                    </Typography>
                  </Button>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
