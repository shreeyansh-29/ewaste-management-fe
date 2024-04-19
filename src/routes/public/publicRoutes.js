/*
  @module publicRoutes
*/
import React, {Suspense, lazy} from "react";
import {Routes, Route} from "react-router-dom";
// import Signin from "../../container/signIn/signIn";
// import HomePage from "../../container/homePage/homePage";
// import SignUp from "../../container/signUp/signUp";
// import ForgotPassword from "../../container/forgotPassword/forgotPassword";
// import ResetPass from "../../container/forgotPassword/resetPassword";
// import PageNotFound from "../../components/pageNotFound/pageNotFound";

const Signin = lazy(() => import("../../container/signIn/signIn"));
const HomePage = lazy(() => import("../../container/homePage/homePage"));
const SignUp = lazy(() => import("../../container/signUp/signUp"));
const ForgotPassword = lazy(() =>
  import("../../container/forgotPassword/forgotPassword")
);
const ResetPass = lazy(() =>
  import("../../container/forgotPassword/resetPassword")
);
const PageNotFound = lazy(() =>
  import("../../components/pageNotFound/pageNotFound")
);

const PublicRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default PublicRoutes;
