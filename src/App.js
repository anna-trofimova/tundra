import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import About from './pages/About';
import Brands from './pages/Brands';
import Culture from './pages/Culture';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Router>
       <Navbar/>
     <div className="App">
       <Switch>
         <Route path="/" exact component={About}/>
         <Route path="/brands" exact component={Brands}/>
         <Route path="/culture" exact component={Culture}/>
         <Route path="/contacts" exact component={Contacts}/>
      </Switch>
     </div>
    </Router>
  );
}

export default App;
