import {useHistory} from 'react-router-dom';
import {slugify} from '../util';
import {Button, Divider, Stack} from '@mui/material';
import {pages, settings} from '../config/config';
import React from 'react';
import {styled} from '@mui/styles';

const Item = styled(Button)(({theme}) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function TeamNav({team, page}) {
  const history = useHistory();

  const gotoPage = (pageName) => {
    history.push(`/${slugify(team.name)}/${slugify(pageName)}`);
  };

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}>
      <Item
        variant={page.name === pages.INFO ? 'primary' : 'outlined'}
        onClick={() => gotoPage(pages.INFO)}>
        {pages.INFO}
      </Item>
      <Item
        variant={page.name === pages.RULES ? 'primary' : 'outlined'}
        onClick={() => gotoPage(pages.RULES)}>
        {pages.RULES}
      </Item>
      <Item
        variant={page.name === pages.ROSTER ? 'primary' : 'outlined'}
        onClick={() => gotoPage(pages.ROSTER)}>
        {pages.ROSTER}
      </Item>
      <Item
        variant={'outlined'}
        target={'_blank'}
        href={settings.applyFormLink}>
        Apply Now
      </Item>
    </Stack>
  );
}
