import React, { Component } from 'react';
import {Switch, Route, NavLink } from 'react-router-dom'
import Github from './Github'
import Nasa from './Nasa'
import Homework from './Homework'
import Pokemon from './Pokemon'
import Osu from './Osu'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Ain't no party like an</h3>
            <h1>API Party</h1>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to={'/github'}>Github API</NavLink>
            </li>
            <li>
              <NavLink to={'/nasa'}>Nasa API</NavLink>
            </li>
            <li>
              <NavLink to= {'/homework'}>Homework</NavLink>
            </li>
            <li>
              <NavLink to={'/pokemon'}>Pokemon API</NavLink>
            </li>
            <li>
              <NavLink to={'/osu'}>OSU API</NavLink>
            </li> 
          </ul>
        </div>
        <Switch>
          <Route path='/github' component={Github} />
          <Route path='/nasa'component={Nasa} />
          <Route path='/homework' component={Homework}/>
          <Route path='/pokemon' component={Pokemon} />
          <Route path='/osu' component={Osu} />
          <Route render={() => <p>To get started, click one of the links above</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
