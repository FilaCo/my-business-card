import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CatulhuPage from './containers/CatulhuPage'
import NotFoundPage from './containers/NotFoundPage'
import AdminPage from './containers/AdminPage'
import RobotVacuumCleanerPage from './containers/RobotVacuumCleanerPage'
import HomePage from './containers/HomePage'

const App = () => (
  <Router>
    <Switch>
      <Route path="/catulhu">
        <CatulhuPage />
      </Route>
      <Route path="/admin">
        <AdminPage />
      </Route>
      <Route path="/robot_vacuum_cleaner">
        <RobotVacuumCleanerPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>
)

export default App
