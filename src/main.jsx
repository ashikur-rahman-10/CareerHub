import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Layout/Main";
import Home from "./Components/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
