import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Room from "./pages/Room";
import Error from "./pages/Error";
import Navbar from './components/Navbar';
import SingleRoom from './pages/SingleRoom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/rooms/" component={Room}></Route>
        <Route  path="/rooms/:slug" component={SingleRoom}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  )
}

export default App;
