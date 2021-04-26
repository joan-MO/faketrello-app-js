import React from 'react';
import BoardContent from './components/private/BoardContent/BoardContent';
import BoardList from './components/private/boards/boardsList/BoardList';
import LoginPage from './components/auth/login/LoginPage';
import NotFoundPage from './components/errors/NotFoundPage';
import { Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/content-board/:_id'>
          <BoardContent />
        </Route>
          <Route path="/login" >
            <LoginPage />
          </Route>
        <Route path='/boards'>
          <BoardList />
        </Route>
        <Route path="/404">
          <NotFoundPage />
        </Route>
        <Route exact path='/'>
          <Redirect to="/boards" />
        </Route>
        <Route>
          <Redirect to="/404" />
        </Route>
    </Switch>
    </div>
  );
}

export default App;
