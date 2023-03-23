import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header"
import NavBar from "./NavBar"
import NewForm from "./NewForm"
import Participants from "./Participants"
import Groups from "./Groups"

function App() {
  const [page, setPage]=useState("/")

  return (
    <div>
      <Header />
      <NavBar onChangePage={setPage}/>
    <Switch>
      <Route path = "/newForm">
        <NewForm />
      </Route>
      <Route path = "/participants">
        <Participants />
      </Route>
      <Route path = "/participants">
        <Participants />
      </Route>
      <Route path = "/groups">
        <Groups />
      </Route>
      <Route path = "/">
        <h1> TBD Picture and theory</h1>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
