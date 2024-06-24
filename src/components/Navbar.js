import React from "react";
import { Route, Link } from "react-router-dom";
import Tables from "./Tables";
import ChartData from "./ChartData";
import Form from "./Form";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Route path="/tables" component={Tables} />
      <Route path="/chart" component={ChartData} />
      <Route path="/form" component={Form} />

      <a href="/tables">Tables</a>
      <a href="/form">Form</a>
      <a href="/chart">Chart</a>
    </nav>
  );
};

export default Navbar;
