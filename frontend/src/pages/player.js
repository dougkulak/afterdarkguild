import React from 'react';
import {
  Alert,
  AlertTitle,
  Button,
  Chip,
  Divider,
  Grid,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import {equipmentSlots, pages, settings} from '../config/config';
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
import {LoggedRunTable} from '../components/LoggedRunTable';
import {getRaidTeamDataByName} from '../Layout';
import {AttendanceTable} from '../components/AttendanceTable';

function LootItemWanted({loot}) {
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
        secondary={`from [${loot.encounters.join(', ')}] since ${new Date(
          loot.dateFirstWanted
        ).toLocaleDateString()}`}
        secondaryTypographyProps={{variant: 'caption'}}
      />
    </ListItemButton>
  );
}

function LootItemReceived({loot}) {
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

function EquipmentSlot({slot, item, side = 'left'}) {
  const width = useWidth();
  return (
    <ListItemButton
      sx={{
        justifyContent:
          side === 'right'
            ? isWidthDown('md', width)
              ? 'flex-start'
              : 'flex-end'
            : 'flex-start',
        flexDirection:
          side === 'right'
            ? isWidthDown('md', width)
              ? 'row'
              : 'row-reverse'
            : 'row',
      }}
      disabled={!item}
      onClick={
        item
          ? (e) => {
              const href = e.currentTarget.querySelector('a').href;
              window.open(href);
            }
          : null
      }>
      <ListItemAvatar
        sx={{
          minWidth: 'auto',
          mr: side === 'right' ? (isWidthDown('md', width) ? 1 : 0) : 1,
          ml: side === 'right' ? (isWidthDown('md', width) ? 0 : 1) : 0,
        }}>
        <Box sx={{position: 'relative', width: 44, height: 44}}>
          <WowItemLink num={item} size={'medium'} block />
          <img
            src={`/icons/gearslots/${slot.replace(' ', '')}.jpg`}
            alt={slot}
            width={44}
            height={44}
            style={{position: 'absolute', top: 0, left: 0, zIndex: -1}}
          />
        </Box>
      </ListItemAvatar>
      <ListItemText
        sx={{
          textAlign:
            side === 'right'
              ? isWidthDown('md', width)
                ? 'left'
                : 'right'
              : 'left',
        }}
        primary={item ? <WowItemLink num={item} rename={true} /> : slot}
      />
    </ListItemButton>
  );
}

function Equipment({equipped}) {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6}>
          <EquipmentSlot slot={equipmentSlots.HEAD} item={equipped.head} />
          <EquipmentSlot slot={equipmentSlots.NECK} item={equipped.neck} />
          <EquipmentSlot
            slot={equipmentSlots.SHOULDERS}
            item={equipped.shoulders}
          />
          <EquipmentSlot slot={equipmentSlots.BACK} item={equipped.back} />
          <EquipmentSlot slot={equipmentSlots.CHEST} item={equipped.chest} />
          <EquipmentSlot slot={equipmentSlots.SHIRT} item={equipped.shirt} />
          <EquipmentSlot slot={equipmentSlots.TABARD} item={equipped.tabard} />
          <EquipmentSlot slot={equipmentSlots.WRISTS} item={equipped.wrists} />
          <EquipmentSlot
            slot={equipmentSlots.MAINHAND}
            item={equipped.mainhand}
          />
          <EquipmentSlot
            slot={equipmentSlots.OFFHAND}
            item={equipped.offhand}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <EquipmentSlot
            side={'right'}
            slot={equipmentSlots.HANDS}
            item={equipped.hands}
          />
          <EquipmentSlot
            side={'right'}
            slot={equipmentSlots.WAIST}
            item={equipped.waist}
          />
          <EquipmentSlot
            side={'right'}
            slot={equipmentSlots.LEGS}
            item={equipped.legs}
          />
          <EquipmentSlot
            side={'right'}
            slot={equipmentSlots.FEET}
            item={equipped.feet}
          />
          <EquipmentSlot
            side={'right'}
            slot={equipmentSlots.FINGER1}
            item={equipped.finger1}
          />
          <EquipmentSlot
            side={'right'}
            slot={equipmentSlots.FINGER2}
            item={equipped.finger2}
          />
          <EquipmentSlot
            side={'right'}
            slot={equipmentSlots.TRINKET1}
            item={equipped.trinket1}
          />
          <EquipmentSlot
            side={'right'}
            slot={equipmentSlots.TRINKET2}
            item={equipped.trinket2}
          />
          <EquipmentSlot
            side={'right'}
            slot={equipmentSlots.RANGED}
            item={equipped.ranged}
          />
        </Grid>
      </Grid>
    </div>
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

  const allRaids = raidTeams.map((x) => x.raids || []).flat();
  const allLoggedRuns = allRaids.map((x) => x.loggedRuns || []).flat();

  const teamRaids = getRaidTeamDataByName(player.team).raids;
  const teamLoggedRuns = teamRaids.map((x) => x.loggedRuns || []).flat();

  const allAttendedRuns = allLoggedRuns.filter((x) =>
    x.attendees.includes(player.name)
  );

  const teamAttendedRuns = teamLoggedRuns.filter((x) =>
    x.attendees.includes(player.name)
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
          Gear
        </Typography>
      </Box>

      {!player.equipment && (
        <Typography variant={'body2'}>
          Player does not have any gear defined yet.
        </Typography>
      )}

      {player.equipment && <Equipment equipped={player.equipment} />}

      <Box mt={2}>
        <Typography variant={'overline'} color={'primary'}>
          Loot
        </Typography>
      </Box>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant={'subtitle2'}>Wanted</Typography>
          {!player.lootWanted && (
            <Typography variant={'body2'}>
              Player has not requested to reserve any loot yet.
            </Typography>
          )}

          {player.lootWanted && (
            <List sx={{width: '100%', bgcolor: 'background.paper'}}>
              {player.lootWanted.map((loot, i) => (
                <LootItemWanted key={i} loot={loot} />
              ))}
            </List>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant={'subtitle2'}>Received</Typography>
          {!player.lootReceived && (
            <Typography variant={'body2'}>
              Player has not received any loot yet.
            </Typography>
          )}

          {player.lootReceived && (
            <List sx={{width: '100%', bgcolor: 'background.paper'}}>
              {player.lootReceived.map((loot, i) => (
                <LootItemReceived key={i} loot={loot} />
              ))}
            </List>
          )}
        </Grid>
      </Grid>

      <Box mt={2}>
        <Typography variant={'overline'} color={'primary'}>
          Attendance
        </Typography>
      </Box>

      {!teamAttendedRuns && (
        <Typography variant={'body2'}>
          Player has not attended any runs yet.
        </Typography>
      )}

      {teamAttendedRuns && (
        <AttendanceTable
          player={player}
          allRuns={teamLoggedRuns}
          attendedRuns={teamAttendedRuns}
        />
      )}

      <Box mt={2}>
        <Typography variant={'overline'} color={'primary'}>
          Runs Attended
        </Typography>
      </Box>

      {!allAttendedRuns && (
        <Typography variant={'body2'}>
          Player has not attended any runs yet.
        </Typography>
      )}

      {allAttendedRuns && <LoggedRunTable runs={allAttendedRuns} />}

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
        direction={isWidthDown('md', width) ? 'column' : 'row'}
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
    </Box>
  );
};

export default PlayerPage;
