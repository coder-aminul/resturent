import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Menu from "./Menu";
import Service from "./Service";

const Body = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/menus" exact component={Menu} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/service" exact component={Service} />
      <Route path="/about" exact component={About} />
    </div>
  );
};

export default Body;
