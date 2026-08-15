import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

import DashboardLayout from "../layouts/dashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

import Collections from "../pages/collections";
import Requests from "../pages/requests";
import RequestDetails from "../pages/requestDetails";

function AppRoutes() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      <Route
        path="/"
        element={
          token ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Login />
          )
        }
      />

      <Route
        path="/login"
        element={
          token ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Login />
          )
        }
      />

      <Route
        path="/register"
        element={
          token ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Register />
          )
        }
      />

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/collections"
          element={<Collections />}
        />

        <Route
          path="/requests/:collectionId"
          element={<Requests />}
        />

        <Route
          path="/request/:id"
          element={<RequestDetails />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />
        </Route>

        <Route
          path="*"
          element={<NotFound />}
        />
    </Routes>

      
    
  );
}

export default AppRoutes;