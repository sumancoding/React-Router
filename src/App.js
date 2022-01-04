// if version 6 of react-router-dom doesnt work, use version 5. npm install react-router-dom@5.2.0
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />{" "}
        {/*exact allows us to be on exact page , path allows us to go to that page*/}
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </BrowserRouter>
    </>
  );
}

export default App;
