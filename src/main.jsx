import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContextProvider } from "./ThemeContextProvider";
import { RouterProvider } from "react-router-dom";
import Router from './Router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={Router} />
    </ThemeContextProvider>
  </React.StrictMode>,
)
