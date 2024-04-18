import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import Main from "./layout/Main/Main.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import AuthProvider from "./ContextProviders/AuthProvider.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";

//'eea5c5e4f69987bb63ed5c552907bfc14cdcc811cf8d1808635b7ef107064f1d3f3d3ef6e72f266a92dba25ff95336d8e66c1f9e1d3fcb45b02f801466b70070'

//SetUp the Router....................!
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
      {
        path: "/",
        element: <SignUp />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
