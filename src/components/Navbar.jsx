import React from "react";
import { Link } from "react-router-dom";
import useToken from "../useToken";

function Navbar() {
  const { token } = useToken();

  // let buttons;

  // if (token) {
  //   buttons = (
  //     <>
  //       <h6 style={{ paddingTop: "12px" }}>
  //         <Link
  //           to="/auth/logout"
  //           className="link"
  //           onClick={() => window.location.reload()}
  //         >
  //           Logout
  //         </Link>
  //       </h6>
  //     </>
  //   );
  // } else {
  //   buttons = (
  //     <>
  //       <h6 style={{ paddingTop: "12px" }}>
  //         <Link to="/auth/login" className="link">
  //           Login
  //         </Link>
  //       </h6>
  //       <h6 style={{ paddingTop: "12px" }}>
  //         <Link to="/auth/signup" className="link">
  //           Signup
  //         </Link>
  //       </h6>
  //     </>
  //   );
  // }
  // return (
  //   <nav className="navbar bg-info">
  //     <h4 id="logo-font">BOOK STORE</h4>
  //     <h6 style={{ paddingTop: "12px" }}>
  //       <Link to="/" className="link">
  //         Home
  //       </Link>
  //     </h6>
  //     {buttons}
  //   </nav>
  // );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <Link to="/">
        <h3 className="text-light navbar-brand">BOOK STORE</h3>
      </Link>

      <button
        className="navbar-toggler bg-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              id="navbar-list"
              style={{ fontSize: "18px" }}
            >
              Home
            </Link>
          </li>

          {token ? (
            <li className="nav-item">
              <Link
                to="/books"
                className="nav-link"
                id="navbar-list"
                style={{ fontSize: "18px" }}
              >
                Books
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link
                to="/auth/login"
                className="nav-link"
                id="navbar-list"
                style={{ fontSize: "18px" }}
              >
                Login
              </Link>
            </li>
          )}

          {token ? null : (
            <li className="nav-item">
              <Link
                to="/auth/signup"
                className="nav-link"
                id="navbar-list"
                style={{ fontSize: "18px" }}
              >
                SignUp
              </Link>
            </li>
          )}
          {!token ? null : (
            <li className="nav-item">
              <Link
                to="/auth/logout"
                className="nav-link"
                onClick={() => window.location.reload()}
                id="navbar-list"
                style={{ fontSize: "18px" }}
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
