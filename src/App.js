// if version 6 of react-router-dom doesnt work, use version 5. npm install react-router-dom@5.2.0
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Error from "./Error";
import Post from "./Post";
import DashBoard from "./DashBoard";
import Button from "./Button";
function App() {
  let isLogged = false;
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />{" "}
          {/*exact allows us to be on exact page , path allows us to go to that page*/}
          <Route exact path="/about" component={About} />
          {/*<Route exact path="/contact" component={Contact} />*/}
          <Route exact path="/post/:category" component={Post} />{" "}
          {/*: category created dynnamic pages*/}
          <Route exact path="/post/:category/:id" component={Post} />
          <Route exact path="/contact">
            {" "}
            {/* Another way */}
            <Contact company_name="Malla & Malla Enterprise" />
          </Route>
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/login">
            {isLogged ? <Redirect to="./dashboard" /> : <Home />}
          </Route>
          <Route component={Error} />{" "}
          {/* Error wil be handled by component only. Error should be at the end*/}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
