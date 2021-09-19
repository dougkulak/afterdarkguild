import {useHistory} from 'react-router-dom';
import {slugify, useWidth} from '../util';
import {Button, Stack} from '@mui/material';
import {pages} from '../config/config';
import React from 'react';
import {makeStyles, styled} from '@mui/styles';
import {isWidthDown} from '@mui/material/Hidden/withWidth';

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

export function TeamNav({team, page}) {
  const history = useHistory();
  const width = useWidth();
  const classes = useStyles();

  const gotoTeamPage = (pageName) => {
    history.push(`/${slugify(team.name)}/${slugify(pageName)}`);
  };

  return (
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
  );
}
