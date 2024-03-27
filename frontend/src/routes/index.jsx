import React, { Suspense } from "react";
import { useRoutes, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import Root from "./Root";
import * as URLS from "../static/url";

import PrivacyPolicy from "../pages/common/privacy-policy";
import ResetPasswordFinal from "../auth/resetPasswordFinal";

import ChatPanel from "../page/ChatPanel";
import NotFound from "../page/NotFound";
import NavBar from "../page/NavBar";
import Contacts from "../page/Contacts";

const loading = () => <div className=""></div>;

const general_urls = "general_urls";

function RequireAuth({ component: Component }) {
  let location = useLocation();
  let auth = null;
  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return (
      <Navigate to={URLS.CUSTOMER_LOGIN} state={{ from: location }} replace />
    );
  }
  return (
    <Suspense fallback={loading()}>
      <Component />
    </Suspense>
  );
}

const LoadComponent = ({ component: Component, userType }) => {
  const user_type = useSelector((state) => state.auth.user_type);
  let location = useLocation();

  if (user_type === "customer" && userType === "business_customer") {
    return <Navigate to={URLS.HOME_URL} state={{ from: location }} replace />;
  }
  return (
    <Suspense fallback={loading()}>
      <Component />
    </Suspense>
  );
};

const AllRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <div>
          <NavBar />
          <Contacts />
        </div>
      ),
    },
    {
      path: "/",
      children: [
        {
          path: "chat/:chatUserId",
          element: (
            <LoadComponent
              component={
                <div>
                  <Box
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                      },
                    }}
                  >
                    <NavBar />
                  </Box>
                  <ChatPanel />
                </div>
              }
              userType={"general_urls"}
            />
          ),
        },
        {
          path: "/chat/:chatUserId",
          element: (
            <LoadComponent
              component={
                <div>
                  <Box
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                      },
                    }}
                  >
                    <NavBar />
                  </Box>
                  <ChatPanel />
                </div>
              }
              userType={"general_urls"}
            />
          ),
        },
      ],
    },
  ]);
};
export default AllRoutes;
