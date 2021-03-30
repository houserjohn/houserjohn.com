import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './CSS/Layout.css';

import Home from "./Pages/Home";
import Techopedia from "./Pages/Techopedia";
import Topbar from "./Components/Topbar";
import Botbar from "./Components/Botbar";
import Path from "./Pages/Path";

function App() {
  return (
    
    <Router>
      <div className="grid-container"> 
        <Topbar/>
        <Switch>
            <Route path="/techopedia">
              <Techopedia/>
            </Route>
            <Route path="/path">
              <Path/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
        </Switch>
        <Botbar/>
      </div>  
    </Router>
  );
}

export default App;
