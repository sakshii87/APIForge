// import { Routes, Route, Navigate } from "react-router-dom";

// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Dashboard from "../pages/Dashboard";
// import Profile from "../pages/Profile";
// import NotFound from "../pages/NotFound";

// import DashboardLayout from "../layouts/dashboardLayout";
// import ProtectedRoute from "./ProtectedRoute";

// import Collections from "../pages/collections";
// import Requests from "../pages/requests";
// import RequestDetails from "../pages/requestDetails";
// import History from "../pages/history";

// function AppRoutes() {
//   const token = localStorage.getItem("token");

//   return (
//     <Routes>
//       {/* Default URL - always go to Login */}
//       <Route
//         path="/"
//         element={<Navigate to="/login" replace />}
//       />

//       {/* Login */}
//       <Route
//         path="/login"
//         element={
//           token ? (
//             <Navigate to="/dashboard" replace />
//           ) : (
//             <Login />
//           )
//         }
//       />

//       {/* Register */}
//       <Route
//         path="/register"
//         element={
//           token ? (
//             <Navigate to="/dashboard" replace />
//           ) : (
//             <Register />
//           )
//         }
//       />

//       {/* Protected Routes */}
//       <Route
//         element={
//           <ProtectedRoute>
//             <DashboardLayout />
//           </ProtectedRoute>
//         }
//       >
//         <Route
//           path="/dashboard"
//           element={<Dashboard />}
//         />

//         <Route
//           path="/collections"
//           element={<Collections />}
//         />

//         <Route
//           path="/requests/:collectionId"
//           element={<Requests />}
//         />

//         <Route
//           path="/request/:id"
//           element={<RequestDetails />}
//         />

//         <Route
//           path="/history"
//           element={<History />}
//         />

//         <Route
//           path="/profile"
//           element={<Profile />}
//         />
//       </Route>

//       {/* Page Not Found */}
//       <Route
//         path="*"
//         element={<NotFound />}
//       />
//     </Routes>
//   );
// }

// export default AppRoutes;







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
import History from "../pages/history";

function AppRoutes() {
  return (
    <Routes>
      {/* Default URL - always go to Login */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Register */}
      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected Routes */}
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
          path="/history"
          element={<History />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />
      </Route>

      {/* Page Not Found */}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default AppRoutes;