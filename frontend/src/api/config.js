const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

function buildDashboardUrl(authData) {
  const authParams = new URLSearchParams();

  if (authData?.token) {
    authParams.set("token", authData.token);
  }

  if (authData?.user?.name) {
    authParams.set("name", authData.user.name);
  }

  const hash = authParams.toString();
  return hash ? `${DASHBOARD_URL}/#${hash}` : DASHBOARD_URL;
}

export { API_BASE_URL, DASHBOARD_URL, buildDashboardUrl };
