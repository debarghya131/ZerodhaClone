import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import {
  FRONTEND_URL,
  clearDashboardAuth,
  getStoredDashboardToken,
  storeDashboardAuth,
} from "../api";

function getAuthFromHash(hash) {
  const authParams = new URLSearchParams(hash.startsWith("#") ? hash.slice(1) : hash);
  const token = authParams.get("token")?.trim() || "";
  const name = authParams.get("name")?.trim() || "";

  if (!token) {
    return null;
  }

  return { token, name };
}

const Home = () => {
  const [isAuthReady, setIsAuthReady] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const incomingAuth = getAuthFromHash(location.hash);

    if (incomingAuth) {
      storeDashboardAuth(incomingAuth);
      setIsAuthReady(true);
      navigate(
        {
          pathname: location.pathname,
          search: location.search,
        },
        { replace: true }
      );
      return;
    }

    if (!getStoredDashboardToken()) {
      clearDashboardAuth();
      window.location.assign(`${FRONTEND_URL}/login`);
      return;
    }

    setIsAuthReady(true);
  }, [location.hash, location.pathname, location.search, navigate]);

  if (!isAuthReady) {
    return null;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
