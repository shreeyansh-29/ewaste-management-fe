/*
  @module publicRoutes
*/
import React from "react";
import {Routes, Route} from "react-router-dom";
import Signin from "../../container/signIn/signIn";
import HomePage from "../../container/homePage/homePage";
import SignUp from "../../container/signUp/signUp";
import ForgotPassword from "../../container/forgotPassword/forgotPassword";
import ResetPass from "../../container/forgotPassword/resetPassword";
import PageNotFound from "../../components/pageNotFound/pageNotFound";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/Signin" element={<Signin />} />
      <Route exact path="/signUp" element={<SignUp />} />
      <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
      <Route
        exact
        path={"/password/save/:token"}
        render={(props) => <ResetPass {...props} />}
        element={<ResetPass />}
      />
      <Route exact path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default PublicRoutes;
