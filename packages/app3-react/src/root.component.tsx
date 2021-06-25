import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useHistory
} from "react-router-dom";

interface IRootProps {
  spa: any
}

export default class Root extends React.Component<IRootProps,any> {
  constructor(props) {
    super(props);
  }

  goTo(a) {

  }

  render() {
    return <Router basename="/app3" >
     <div>

      <h1>
        Micro Frontend 3
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
      </h1>

      <div>
       <NavLink to="/">Home</NavLink><span>&nbsp;&nbsp;&nbsp;</span>
       <NavLink to="/about">About</NavLink><span>&nbsp;&nbsp;&nbsp;</span>
       <NavLink to="/users">Users</NavLink><span>&nbsp;&nbsp;&nbsp;</span>
       <NavLink to="/app1">Go to App 1</NavLink><span>&nbsp;&nbsp;&nbsp;</span>
      </div>

       {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
       <Switch>
         <Route path="/about">
           <About />
         </Route>
         <Route path="/users">
           <Users />
         </Route>
         <Route path="/app1">
           <Redirect spa={this.props} />
         </Route>
         <Route path="/">
           <Home />
         </Route>
       </Switch>
     </div>
   </Router>
  }
}

const NavLink = props => (
  <span>
    <Link {...props} style={{ color: 'inherit' }} />
  </span>
);

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class Redirect extends React.Component<{spa:any},any> {
  constructor(props) {
    super(props);
    this.props.spa.spa.callBack('/app1');
  }
  render() {
    return <h2>Redirect</h2>;
  }
}