import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../src/components/Nav";
import Jumbotron from "../src/components/Jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron />
        {/* "switch" tags acts as switch case statements for the routes... whether it's search, saved, or no match */}
        <Switch>
          <Route exact path={["/", "/search"]} component={Search}>
            <Search />
          </Route>
          <Route exact path="/saved"component={Saved}>
            <Saved />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
