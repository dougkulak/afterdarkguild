import React, {useEffect, useState} from 'react';
import {
  Alert,
  AlertTitle,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import {announcementTypes, settings, teams} from '../config/config';
import {slugify} from '../util';
import Code from '../components/Code';
import {getAnnouncementsForTeam} from '../config/teams';
import {AccountCircleOutlined, Info, Schedule} from '@mui/icons-material';
import {useHistory} from 'react-router-dom';

const AnnouncementsPage = ({team}) => {
  const isAll = team.name === teams.ALL;
  const history = useHistory();

  const teamAnnouncements = getAnnouncementsForTeam(team.name);

  const [announcements, setAnnouncements] = useState(teamAnnouncements);

  useEffect(() => {
    setAnnouncements(teamAnnouncements);
  }, [team]); //eslint-disable-line

  return (
    <div>
      {settings.showAnnouncementEditHelp && team.name !== teams.ALL && (
        <React.Fragment>
          <Alert severity="info">
            <AlertTitle>Attention: Team Leaders</AlertTitle>
            This should be used for important team announcements.
            <br />
            <br />
            To add an announcement, open{' '}
            <strong>/frontend/src/teams/{slugify(team.name)}.js</strong> and
            edit the <Code>announcements</Code> key.
          </Alert>
          <Box py={3}>
            <Divider />
          </Box>
        </React.Fragment>
      )}

      <Typography variant={'h6'} gutterBottom>
        {isAll ? 'After Dark' : `${team.name} Team`} Announcements (
        {announcements.length})
      </Typography>

      <Stack sx={{width: '100%'}} spacing={2}>
        {announcements.length === 0 && (
          <Paper elevation={0} variant="outlined">
            <Typography variant={'subtitle1'} sx={{m: 2}}>
              <Info sx={{verticalAlign: 'top', mr: 2}} />
              {team.name} Team does not have any new announcements.
            </Typography>
          </Paper>
        )}
        {announcements.map((announcement, i) => (
          <Alert
            key={i}
            variant="outlined"
            severity={announcement.type || announcementTypes.INFO}
            sx={{width: '100%'}}>
            {announcement.title && (
              <AlertTitle>{announcement.title}</AlertTitle>
            )}
            {announcement.content}
            <Box py={1}>
              <Divider />
            </Box>
            <Stack direction={'row'} spacing={2}>
              <Chip
                variant={'outlined'}
                icon={<AccountCircleOutlined />}
                onClick={
                  announcement.author
                    ? () => {
                        window.scrollTo(0, 0);
                        history.push(
                          `/players/${slugify(announcement.author)}`
                        );
                      }
                    : null
                }
                label={
                  announcement.author ||
                  (isAll ? 'After Dark' : `${team.name} Team Leader`)
                }
              />
              <Chip
                variant={'outlined'}
                icon={<Schedule />}
                label={new Date(
                  announcement.date || new Date()
                ).toLocaleDateString()}
              />
            </Stack>
          </Alert>
        ))}
      </Stack>
    </div>
  );
};

export default AnnouncementsPage;
