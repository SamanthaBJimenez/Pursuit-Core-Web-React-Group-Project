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
           <Switch >
               <Route exact path={"/"}>
                   <LogIn/>
               </Route>
               <Route path={"/signup"}>
                   <SignUp/>
               </Route>
               <Route path={"/homepage"}>
                   <Homepage/>
               </Route>
               <Route path={"/upload"}>
                   <Upload/>
               </Route>
           </Switch>
            </div>
        )
    }
}

export default Letsgo
