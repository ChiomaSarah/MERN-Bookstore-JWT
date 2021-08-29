import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container text-center ">
        <h3 className="page-header">Hello there! Welcome to Chioma's bookstore!</h3>
        
        <h5 className="mt-5">Navigate:</h5>
        <ul className="mt-4">
          <h6><i className="fas fa-hand-point-right mr-3"></i>
            <Link to="/books" className="link navigation-link mr-4">Books</Link>
          </h6>
          <h6>
            <i className="fas fa-hand-point-right mr-3"></i>
            <Link to="/add-book" className="link navigation-link">Add Book</Link>
          </h6>
        </ul>
      </div>
    </>
  );
}
export default Home;
