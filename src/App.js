import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import SingleRoom from './pages/SingleRoom'
import Rooms from './pages/Rooms'
import Error from './pages/Error'
import About from './pages/About'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      {/*Switch is used so that the error message only appears if there is no match in the url */}
      <Navbar></Navbar>
      <Switch> 
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
        <Route exact path="/rooms/" component={Rooms}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route component={Error}></Route> {/* If the route statement (url) does not match anything then the errro message will be shown*/}
      </Switch>
    </>
  );
}

export default App;
