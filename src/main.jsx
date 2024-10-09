import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Components/Layout'; // Ensure Layout is defined
import CoursesPage from './Components/Features/CourcesPage';
import SkillsPage from './Components/Features/Skill';
import HomePage from './Components/Features/HomePage'

// Creating the router using react-router-dom
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
<<<<<<< HEA
      
      
      
=======
    <Route path="/courses" element={<CoursesPage/>} />
    <Route path="/features" element={<SkillsPage />} />
    <Route path="/" element={<HomePage />} />
>>>>>>> aafaa42afc8c8b4a91e560c98b9a785cde443d08
    </Route>
  )
);

// Rendering the React app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
