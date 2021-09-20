import {useHistory} from 'react-router-dom';
import {getEncounterAbbrev, slugify, useWidth} from '../util';
import {Button, Divider, Stack} from '@mui/material';
import React from 'react';
import {makeStyles, styled} from '@mui/styles';
import {isWidthDown} from '@mui/material/Hidden/withWidth';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  active: {
    '&.MuiButton-root': {
      color: theme.palette.primary.contrastText,
      borderColor: theme.palette.primary.contrastText,
    },
  },
}));

const Item = styled(Button)(({theme}) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function RaidTopNav({team, page, raid}) {
  const history = useHistory();
  const width = useWidth();
  const classes = useStyles();

  const gotoTeamPage = (pageName) => {
    window.scrollTo(0, 0);
    history.push(`/${slugify(team.name)}/${slugify(pageName)}`);
  };

  if (window.location.pathname.includes('/apply')) return <React.Fragment />;

  return (
    <React.Fragment>
      <Stack
        direction={isWidthDown('md', width) ? 'column' : 'row'}
        spacing={isWidthDown('md', width) ? 1 : 2}>
        {team.raids.map((teamRaids) => (
          <Item
            key={teamRaids.encounter}
            variant={'outlined'}
            size={'small'}
            className={
              page.name === teamRaids.encounter ? classes.active : null
            }
            onClick={() => gotoTeamPage(teamRaids.encounter)}>
            {getEncounterAbbrev(teamRaids.encounter)}
          </Item>
        ))}
      </Stack>
      <Box pt={3} pb={2}>
        <Divider />
      </Box>
    </React.Fragment>
  );
}
