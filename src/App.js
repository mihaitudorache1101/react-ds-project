import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Members from "./components/Members";
import EditMember from "./components/EditMember";
import CreateMember from "./components/CreateMember";

function App() {
  return (
    <div>
      <nav className='navbar bg-light navbar-expand-lg navbar0light'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to='/create' className='navbar-link'>
              Create Member
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/' className='navbar-link'>
              Members
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={Members} />
        <Route exact path='/edit/:id' component={EditMember} />
        <Route exact path='/create' component={CreateMember} />
      </Switch>
    </div>
  );
}

export default App;
