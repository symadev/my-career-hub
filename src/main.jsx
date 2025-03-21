import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Dashboard from './Component/Dashboard/Dashboard.jsx';
import Errorpage from './Component/Errorpage/Errorpage.jsx';
import JobDetails from './Component/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
      },
      {
        path: "dashboard",
        element:<Dashboard></Dashboard> ,
      },
      {
        path: "/job/:id",
        element:<JobDetails></JobDetails> ,
      },
      {
        path: "error",
        element:<Errorpage></Errorpage> ,
      },
     
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
