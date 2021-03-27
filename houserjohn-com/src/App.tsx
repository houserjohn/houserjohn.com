import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Techopedia from "./Pages/Techopedia";
import Topbar from "./Components/Topbar";

function App() {
  return (
    
    <Router>   
      <Topbar/>
      <Switch>
          <Route path="/techopedia">
            <Techopedia/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
