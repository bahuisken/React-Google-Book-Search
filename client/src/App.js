import React from "react";
import Books from "./pages/Books";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={"/"}>
            <Search />
          </Route>
          <Route exact path={"/books"}>
            <Books />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
