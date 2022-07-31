/*
  @module pageNotFound
*/
import React from "react";
import "./pageNotFound.css";
const PageNotFound = () => {
  return (
    <div className="row text-center">
      <div className="col-lg-12">
        <h1 className="notFound"> 404 Error</h1>
      </div>
      <div className="col-lg-12">
        <h2>Page Not Found</h2>
      </div>
    </div>
  );
};

export default PageNotFound;
