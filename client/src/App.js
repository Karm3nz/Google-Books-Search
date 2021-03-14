import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* "switch" tags acts as switch case statements for the routes... whether it's books, details, or no match */}
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
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
