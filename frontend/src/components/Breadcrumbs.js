import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Breadcrumbs as MuiBreadcrumbs} from '@mui/material';
import Link from '@mui/material/Link';
import {slugify} from '../util';
import {NavigateNext} from '@mui/icons-material';
import {teams} from '../config/config';
import {useHistory} from 'react-router-dom';

export default function Breadcrumbs({team, page}) {
  const isAll = team.name === teams.ALL;
  const history = useHistory();

  const gotoPage = (url) => {
    window.scrollTo(0, 0);
    history.push(url);
  };

  return (
    <MuiBreadcrumbs
      separator={<NavigateNext fontSize="small" />}
      aria-label="breadcrumb">
      <Link
        variant={'body2'}
        underline="hover"
        color="inherit"
        style={{cursor: 'pointer'}}
        onClick={() => gotoPage('/all/information')}>
        Home
      </Link>
      {!isAll && (
        <Link
          variant={'body2'}
          underline="hover"
          color="inherit"
          style={{cursor: 'pointer'}}
          onClick={() => gotoPage(`/${slugify(team.name)}/information`)}>
          {team.name}
        </Link>
      )}
      <Typography variant={'body2'} color="text.primary">
        {page.name}
      </Typography>
    </MuiBreadcrumbs>
  );
}
