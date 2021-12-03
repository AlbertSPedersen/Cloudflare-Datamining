import { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import Main from './Main.jsx';

const nav = [
  {
    path: '/',
    id: 'account_flags',
    name: 'Account Flags',
  },
  {
    path: '/account-flags',
    id: 'account_flags',
    name: 'Account Flags',
  },
  {
    path: '/account-entitlements',
    id: 'account_entitlements',
    name: 'Account Entitlements',
  },
  {
    path: '/zone-flags',
    id: 'zone_flags',
    name: 'Zone Flags',
  },
  {
    path: '/zone-entitlements',
    id: 'zone_entitlements',
    name: 'Zone Entitlements',
  },
  {
    path: '/zone-settings',
    id: 'zone_settings',
    name: 'Zone Settings',
  },
]

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedData: 'account_flags',
    }
  }

  select(id) {
    this.setState({ selectedData: id });
  }

  render() {
    const { selectedData } = this.state;

    return (
      <Router>
        <header>
          {nav.filter(item => item.path !== '/').map(item =>
            <NavbarItem
              path = {item.path}
              name = {item.name}
              selected = {selectedData === item.id}
              onClick = {() => this.select(item.id)}
              key = {item.id}
            />
          )}
        </header>

        <Routes key={selectedData}>
          {nav.map(item => 
            <Route
              path = {item.path}
              element = { <Main selectedData = {item.id} /> }
              key = {`route_${item.id}`}
            />
          )}
        </Routes>
      </Router>
    );
  }
}

function NavbarItem({ path, name, onClick, selected = false }) {
  const clazz = selected ? 'navbar-item selected' : 'navbar-item';

  return (
    <Link to = {path}><button onClick = {onClick} className = {clazz}>{name}</button></Link>
  );
}