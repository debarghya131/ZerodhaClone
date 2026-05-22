import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";
const DASHBOARD_TOKEN_KEY = "dashboardToken";
const DASHBOARD_USER_NAME_KEY = "dashboardUserName";

function getStoredDashboardToken() {
  return localStorage.getItem(DASHBOARD_TOKEN_KEY) || "";
}

function getStoredDashboardUserName() {
  return localStorage.getItem(DASHBOARD_USER_NAME_KEY) || "";
}

function storeDashboardAuth({ token, name }) {
  if (token) {
    localStorage.setItem(DASHBOARD_TOKEN_KEY, token);
  }

  if (name) {
    localStorage.setItem(DASHBOARD_USER_NAME_KEY, name);
  }
}

function clearDashboardAuth() {
  localStorage.removeItem(DASHBOARD_TOKEN_KEY);
  localStorage.removeItem(DASHBOARD_USER_NAME_KEY);
}

function getFrontendLoginUrl() {
  return `${FRONTEND_URL}/login?logout=1`;
}

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = getStoredDashboardToken();

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearDashboardAuth();
      window.location.assign(getFrontendLoginUrl());
    }

    return Promise.reject(error);
  }
);

export default API_BASE_URL;
export {
  FRONTEND_URL,
  apiClient,
  clearDashboardAuth,
  getFrontendLoginUrl,
  getStoredDashboardToken,
  getStoredDashboardUserName,
  storeDashboardAuth,
};
