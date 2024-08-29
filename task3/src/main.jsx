import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import PropertyDetails from './pages/PropertyDetails/PropertyDetails.jsx';
import ContactUs from './pages/ContactUs/ContactUs.jsx';
import Footer from './components/Footer/Footer.jsx';
import App from './App.jsx';
import PropertyPage from './pages/PropertyPage/PropertyPage.jsx';

const routers = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children:
      [
        /* home path */
        {
          path : '/',
          element:<Home/>

        },
        /* Properties path */
        {
          path: '/properties',
          element: <PropertyPage/>
        },
        /* property details  */
        {
          path: '/property',
          element: <PropertyDetails />
        },
        /* contact path */
        {
          path: '/contact',
          element: <ContactUs/>
        }
      ]
    },

  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={routers}/>
    <Footer/>
  </StrictMode>,
)
