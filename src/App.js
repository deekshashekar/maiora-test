import "./App.css";

import Login from "./components/Login";
import { Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <Route path="/login" component={Login} />
      <Link to="/login">Login</Link>
      <Navbar />
    </div>
  );
}

export default App;
