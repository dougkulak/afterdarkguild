import React, {useState} from 'react';
import theme from './theme';
import './App.css';
import Layout from './Layout';
import {ThemeProvider} from '@mui/material';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import InfoPage from './pages/info';
import RulesPage from './pages/rules';
import RosterPage from './pages/roster';
import {raidTeamPages} from './config/pages';
import {raidTeams} from './config/teams';

const defaultRaidTeamData = raidTeams[0];
const defaultPageData = raidTeamPages[0];

function App() {
  const [themeData, setThemeData] = useState(theme);

  const [currentTeam, setCurrentTeam] = useState(defaultRaidTeamData);
  const [currentPage, setCurrentPage] = useState(defaultPageData);

  const updateThemePrimaryColor = (color) => {
    setThemeData((prevState) => {
      let newState = {...prevState};
      newState.palette.primary.main = color;
      return newState;
    });
  };

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
            <Route path={'/:team/information'}>
              <InfoPage team={currentTeam} page={currentPage} />
            </Route>
            <Route path={'/:team/rules'}>
              <RulesPage team={currentTeam} page={currentPage} />
            </Route>
            <Route path={'/:team/roster'}>
              <RosterPage team={currentTeam} page={currentPage} />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
