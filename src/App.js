// if version 6 of react-router-dom doesnt work, use version 5. npm install react-router-dom@5.2.0
import React from "react";
//BrowserRouter connects with Browser URL
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NavBar from "./components/NavBar";
import DashBoard from "./components/pages/DashBoard";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";

function App() {
  let isLogged = true; //This is for conditional rebdering. User is not logged in
  let data = {
    st: "User Not Logged in ",
  };
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/*<Route path="/" element={<h1> Hello Suman </h1>} />. Roue Path defines a route */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/:category" element={<Contact />} />
          {/* You can create multiples*/}
          <Route path="/contact/:category/:id" element={<Contact />} />
          {/* :category allowed us to create dynamic, whatever we type is valid*/}
          <Route
            path="/dashboard"
            element={
              isLogged ? (
                <DashBoard />
              ) : (
                <Navigate to="/login" replace state={data} />
              )
            }
          />{" "}
          {/* State prop here allows to send data var to login. This requires access ia useLocation*/}
          {/* Navigate is imported from react-dom. If the consition is not true, then it directs to login page. */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="*"
            element={<h1> Error 404 Page not Found !!!!</h1>}
          />{" "}
          {/*No Match Url- 404 not found*. Put this at last */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
