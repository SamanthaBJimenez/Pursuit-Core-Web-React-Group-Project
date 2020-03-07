import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Upload from './components/Upload';
// import NavBar from './components/NavBar';
import Home from './components/Homepage';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css?family=Prompt&display=swap');
      </style>
      <Switch>
        <Route path={"/signup"}>
            <SignUp />
        </Route>
        <Route path={"/login"}>
            <LogIn />
        </Route>
        <Route path={"/homepage"}>
            <Home />
        </Route>
        <Route path={"/upload"}>
            <Upload />
        </Route>
        <Route path="*" render={() => <div>Something Went Wrong</div>} />
    </Switch>
    </div>
  );
}

export default App;
