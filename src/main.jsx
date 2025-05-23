import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout.jsx";
import UserList from "./Component/UserList.jsx";
import AddUser from "./Component/AddUser.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import Login from "./Component/Login.jsx";
import UpdateUser from "./Component/UpdateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: UserList,
        loader: () => fetch("http://localhost:3000/users"),
      },
      {
        path: "add-user",
        Component: AddUser,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "update/:email",
        Component: UpdateUser,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
