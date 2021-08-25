import React from "react";

const Logout = () => {
  return (
    <div className="logout-wrapper">
      <div className="logout-inner">
        {sessionStorage.clear()}
        <h3>You have been logged out!</h3>
      </div>
    </div>
  );
};

export default Logout;
