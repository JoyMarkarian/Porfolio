/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, user }) {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
