import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Login from '../Login';
import Main from '../Main';
import NoMatch from '../NoMatch';


class MyPCRouter extends Component {
  state = {

  }

  render() {
    return (
      <Router >
      <div>
      <Switch> 
      <Route exact path="/" component={Login} />
      <Route path="/Main" component={Main} />
       <Route component={NoMatch}/>
     </Switch>
     </div>
     </Router>
    );
  }
}

export default MyPCRouter;
