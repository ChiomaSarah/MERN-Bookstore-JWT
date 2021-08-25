import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Books from "./components/Books";
import AddBook from "./components/AddBook";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    <Login /> || <Signup />;
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/books" component={Books} />

        <Route path="/add-book" component={AddBook} />

        <Route
          path="/auth/signup"
          component={() => <Signup setToken={setToken} />}
        />

        <Route
          path="/auth/login"
          component={() => <Login setToken={setToken} />}
        />

        <Route
          path="/auth/logout"
          component={() => <Logout setToken={setToken} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
