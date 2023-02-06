import React from "react";
import ReactDOM from "react-dom/client";
import User from "./context/User";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <User.UserProvider>
      <App />
    </User.UserProvider>
  </React.StrictMode>
);
