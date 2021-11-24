import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Detail from "./pages/Detail";
//import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <Router>
              {/* <Link to="/">Home</Link> */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/detail" component={Detail}/>
          {/* <Route path="/genrebuttons" component={GenreButtons}/> */}
        </Switch>
    </Router>
    </div>
  );
}

export default App;
