import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from './Modules/Screens/Home/Home.jsx';
import About from './Modules/Screens/About/About.jsx';
import Service from './Modules/Screens/Service/Service.jsx';
import Contact from './Modules/Screens/Contact/Contact.jsx';
import Work from './Modules/Screens/Work/Work.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "work",
        element: <Work />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
