import React from 'react';
import Upload from './components/Upload';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
// import LogIn from './components/LogIn';
// import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <NavBar/>
      <Switch >
          <Route path={"/login"}>
            <Login/>
          </Route>
          <Route path={"/movies"}>
            <Movies/>
          </Route>
          <Route path={"/form"}>
            <Form/>
          </Route>
            
          <Route path={"/clock"} component={Clock} />
            <Route path={"/dogs"} component={DogApp} />
          <Route path={"/people/:id"}>
            <Person />
          </Route>
          <Route  exact path={"/"} >
              <Home/>
              <Home/>
          </Route>
          <Route path="*" render={() => <div>Something Went Wrong</div>} />
      </Switch> */}
      <Upload />
    </div>
  );
}

export default App;
