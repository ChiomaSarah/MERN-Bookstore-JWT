import React from "react";
import { Link } from "react-router-dom";
import useToken from "../useToken";

function Navbar() {
  const { token } = useToken();

  let buttons;
  
  if (token) {
    buttons = (
      <>
        <h6 style={{paddingTop: "12px"}}><Link to="/auth/logout" className="link" onClick={() => window.location.reload()}>Logout</Link></h6>
      </>
    );
  } else {
    buttons = (
      <>
        <h6 style={{paddingTop: "12px"}}><Link to="/auth/login" className="link">Login</Link></h6>
        <h6 style={{paddingTop: "12px"}}><Link to="/auth/signup" className="link">Signup</Link></h6>
      </>
    );
  }
  return (
    <nav className="navbar bg-info">
      <h4 id="logo-font">BOOK STORE</h4>
      <h6 style={{paddingTop: "12px"}}><Link to="/" className="link">Home</Link></h6>
      {buttons}
    </nav>
  );
}
export default Navbar;
