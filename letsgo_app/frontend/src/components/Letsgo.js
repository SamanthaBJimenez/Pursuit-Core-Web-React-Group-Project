import React, { Component } from 'react';
import Homepage from './Homepage';
import Upload from './Upload';
import LogIn from './LogIn';
import SignUp from './SignUp';
import { Route, Switch } from 'react-router-dom'


export class Letsgo extends Component {
    render() {
        return (
            <div className="letsgo">
            {/* <h1>Welcome to Lets Go</h1> */}
           <Switch>
               <Route path={"/homepage"}>
                   <Homepage/>
               </Route>
               <Route path={"/upload"}>
                   <Upload/>
               </Route>
               <Route path={"/login"}>
                   <LogIn/>
               </Route>
               <Route path={"/signup"}>
                   <SignUp/>
               </Route>
           </Switch>
            </div>
        )
    }
}

export default Letsgo
