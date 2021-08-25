import React, { useState } from "react";

import { useHistory } from "react-router-dom";

const Login = ({ setToken }) => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [error, setError] = useState("");

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const body = {
        email,
        password,
      };

      const response = await fetch(
        "https://mysterious-hamlet-48690.herokuapp.com/https://mongodb-bookstore-api.herokuapp.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },

          body: JSON.stringify(body),
        }
      );

      const result = await response.json();
      // console.log(result);
      setToken(result);

      if (!response.ok) {
        throw Error(result.error);
      }

      if (response.ok) {
        history.push("/");
        window.location.reload();
      }
    } catch (err) {
      setError(err.message);
    }
  }

  if (setError.message) {
    error = <div>{setError.message}</div>;
  }

  return (
    <>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-7">
            <div className="card" style={{ borderRadius: "1rem", width: "600px" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://i.ibb.co/cbQmdBm/Book-Logo.png"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem", height: "90vh" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <div className=" text-warning mb-3" style={{ fontSize: "14px" }}>
                        {error}
                      </div>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h2 mb-0" id="logo-font">BOOK STORE</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Log into your account</h5>

                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-md"
                          required
                          placeholder="Email Address"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-md"
                          required
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-lg btn-block text-white" style={{backgroundColor: "#0d0c22"}} type="submit">Login</button>
                      </div>

                      <p className="mb-5 pb-lg-2" id="account-link" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="/auth/signup" style={{ color: "#393f81" }}><b>Sign Up here</b></a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
