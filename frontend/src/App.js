import React, {useEffect, useState} from 'react';
import theme from './theme';
import './App.css';
import Layout from './Layout';
import {ThemeProvider} from '@mui/material';
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';
import InfoPage from './pages/info';
import RulesPage from './pages/rules';
import RosterPage from './pages/roster';
import {raidTeamPages} from './config/pages';
import {raidTeams} from './config/teams';
import {settings} from './config/config';
import AnnouncementsPage from './pages/announcements';
import RaidPage from './pages/raid';
import PlayerPage from './pages/player';

const defaultRaidTeamData = raidTeams[0];
const defaultPageData = raidTeamPages[0];

function App() {
  const history = useHistory();
  const [themeData, setThemeData] = useState(theme);

  const [currentTeam, setCurrentTeam] = useState(defaultRaidTeamData);
  const [currentPage, setCurrentPage] = useState(defaultPageData);

  const updateThemePrimaryColor = (color) => {
    setThemeData((prevState) => {
      let newState = {...prevState};
      newState.palette.primary.main = color;
      newState.components.MuiAppBar.styleOverrides.root.backgroundColor = color;
      return newState;
    });
  };

  useEffect(() => {
    // fix bug with wowhead rewriteLinks not triggering on react page change
    setTimeout(() => {
      window.$WowheadPower.refreshLinks();
    }, 0);
  }, [currentTeam, currentPage, history]);

  return (
    <ThemeProvider theme={themeData}>
      <BrowserRouter>
        <Layout
          setThemeColor={updateThemePrimaryColor}
          team={currentTeam}
          page={currentPage}
          setTeam={setCurrentTeam}
          setPage={setCurrentPage}>
          <Switch>
            <Route path={'/players/:player'}>
              <PlayerPage page={currentPage} />
            </Route>
            <Route path={'/:team/information'}>
              <InfoPage team={currentTeam} page={currentPage} />
            </Route>
            <Route path={'/:team/announcements'}>
              <AnnouncementsPage team={currentTeam} page={currentPage} />
            </Route>
            <Route path={'/:team/rules'}>
              <RulesPage team={currentTeam} page={currentPage} />
            </Route>
            <Route path={'/:team/roster'}>
              <RosterPage team={currentTeam} page={currentPage} />
            </Route>
            <Route path={'/:team/apply'}>
              <div style={{position: 'relative'}}>
                <div style={{height: '100%'}}>
                  <iframe
                    src={settings.applyFormLink}
                    width="100%"
                    height="2000"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    id={'applyForm'}
                    style={{overflowY: 'hidden'}}
                    title={'After Dark Application Form'}>
                    Loading…
                  </iframe>
                </div>
              </div>
            </Route>
            <Route path={'/:team/:raid'}>
              <RaidPage team={currentTeam} page={currentPage} />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
