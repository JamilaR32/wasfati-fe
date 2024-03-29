import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import Recipe from "./pages/Recipe";
import NotFoundPage from "./pages/NotFoundPage";
import OneRecipe from "./pages/OneRecipe";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/recipe",
        element: <Recipe />,
      },
      {
        path: "/recipe/:recipeId",
        element: <OneRecipe />,
      },
      {
        path: "/signup",
        element: <Register />,
      },

      {
        path: "/*",
        element: <NotFoundPage />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
