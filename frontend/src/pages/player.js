import React from 'react';
import {
  Alert,
  AlertTitle,
  Button,
  Chip,
  Divider,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import {pages, settings} from '../config/config';
import {slugify, useWidth} from '../util';
import Box from '@mui/material/Box';
import Code from '../components/Code';
import {useHistory, useParams} from 'react-router-dom';
import {raidTeams} from '../config/teams';
import PlayerCard from '../components/PlayerCard';
import {Check, ChevronLeft} from '@mui/icons-material';
import {isWidthDown} from '@mui/material/Hidden/withWidth';
import List from '@mui/material/List';
import {WowItemLink} from '../components/WowItemLink';

function LootItem({loot}) {
  return (
    <ListItemButton
      onClick={(e) => {
        const href = e.currentTarget.querySelector('a').href;
        window.open(href);
      }}>
      <ListItemAvatar>
        <WowItemLink num={loot.item} size={'medium'} />
      </ListItemAvatar>
      <ListItemText
        primary={<WowItemLink name={loot.itemName} num={loot.item} />}
        secondary={`from ${loot.encounter} (Lead by ${
          loot.giver
        }) on ${new Date(loot.date).toLocaleDateString()}`}
        secondaryTypographyProps={{variant: 'caption'}}
      />
    </ListItemButton>
  );
}

const PlayerPage = () => {
  const params = useParams();
  const history = useHistory();
  const width = useWidth();

  const allPlayers = raidTeams.map((x) => x.players || []).flat();

  const player = allPlayers.find(
    (x) => slugify(x.name) === slugify(params.player)
  );

  if (!player) {
    return <React.Fragment />;
  }

  return (
    <Box>
      {settings.showPlayerEditHelp && (
        <React.Fragment>
          <Alert severity="info">
            <AlertTitle>Attention: Character Owner</AlertTitle>
            This is your own character profile within the guild.
            <br />
            <br />
            To change this content, open{' '}
            <strong>/frontend/src/teams/{slugify(player.team)}.js</strong> and
            find your character in the <Code>players</Code> key.
          </Alert>
          <Box py={3}>
            <Divider />
          </Box>
        </React.Fragment>
      )}

      <Stack
        direction={isWidthDown('sm', width) ? 'column' : 'row'}
        spacing={1}>
        <Box>
          <Button
            fullWidth
            variant={'outlined'}
            sx={{height: '100%'}}
            onClick={() => {
              window.scrollTo(0, 0);
              history.push(`/${slugify(player.team)}/${slugify(pages.ROSTER)}`);
            }}>
            <ChevronLeft />
          </Button>
        </Box>
        <PlayerCard key={player.name} player={player} variant={'outlined'} />
      </Stack>

      <Box mt={2}>
        <Typography variant={'overline'} color={'primary'}>
          Equipment
        </Typography>
      </Box>

      {!player.equipment && (
        <Typography variant={'body2'}>
          Player has not added any equipment to show off yet.
        </Typography>
      )}

      <Box mt={2}>
        <Typography variant={'overline'} color={'primary'}>
          Loot Received
        </Typography>
      </Box>

      {!player.lootReceived && (
        <Typography variant={'body2'}>
          Player has not received any loot yet.
        </Typography>
      )}

      {player.lootReceived && (
        <List sx={{width: '100%', bgcolor: 'background.paper'}}>
          {player.lootReceived.map((loot, i) => (
            <LootItem key={i} loot={loot} />
          ))}
        </List>
      )}

      <Box mt={2}>
        <Typography variant={'overline'} color={'primary'}>
          Attunements
        </Typography>
      </Box>

      {!player.attunes && (
        <Typography variant={'body2'}>
          Player is not attuned for any raids yet.
        </Typography>
      )}

      <Stack
        direction={isWidthDown('sm', width) ? 'column' : 'row'}
        spacing={1}>
        {player.attunes &&
          player.attunes.map((attune) => (
            <Chip
              variant={'outlined'}
              icon={<Check fontSize={'small'} />}
              key={attune}
              label={attune}
            />
          ))}
      </Stack>

      {player.notes && (
        <React.Fragment>
          <Box mt={2}>
            <Typography variant={'overline'} color={'primary'}>
              Notes
            </Typography>
          </Box>

          <Typography variant={'body2'}>{player.notes}</Typography>
        </React.Fragment>
      )}
    </Box>
  );
};

export default PlayerPage;
