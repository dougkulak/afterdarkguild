import {useHistory} from 'react-router-dom';
import {slugify, useWidth} from '../util';
import {Button, Divider, Stack} from '@mui/material';
import {pages} from '../config/config';
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

export function TeamBottomNav({team, page}) {
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
      <Box pb={3}>
        <Divider />
      </Box>
      <Stack
        direction={isWidthDown('md', width) ? 'column' : 'row'}
        spacing={isWidthDown('md', width) ? 1 : 2}>
        <Item
          variant={'outlined'}
          size={'small'}
          className={page.name === pages.INFO ? classes.active : null}
          onClick={() => gotoTeamPage(pages.INFO)}>
          {pages.INFO}
        </Item>
        <Item
          variant={'outlined'}
          size={'small'}
          className={page.name === pages.RULES ? classes.active : null}
          onClick={() => gotoTeamPage(pages.RULES)}>
          {pages.RULES}
        </Item>
        <Item
          variant={'outlined'}
          size={'small'}
          className={page.name === pages.ROSTER ? classes.active : null}
          onClick={() => gotoTeamPage(pages.ROSTER)}>
          {pages.ROSTER}
        </Item>
        <Item
          variant={'outlined'}
          size={'small'}
          className={page.name === pages.APPLY ? classes.active : null}
          onClick={() => gotoTeamPage(pages.APPLY)}>
          {pages.APPLY}
        </Item>
      </Stack>
    </React.Fragment>
  );
}
