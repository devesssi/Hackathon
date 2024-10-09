import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Components/Layout'; // Ensure Layout is defined
import CoursesPage from './Components/Features/CourcesPage';
import SkillsPage from './Components/Features/Skill';
<<<<<<< HEAD
import HomePage from './Components/Features/HomePage';
import Load from './Components/Features/Loading/Load';
=======
import HomePage from './Components/Features/HomePage'
import Vlab from './Components/Features/vlab';
>>>>>>> 717b666c9b758d9a4fd8c95d6e06a6b2512ac866

// Creating the router using react-router-dom
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
<<<<<<< HEAD
      
      
      <Route index element={<Load />} /> 
    <Route path="/courses" element={<CoursesPage/>} />
    <Route path="/features" element={<SkillsPage />} />
    <Route path="/home" element={<HomePage />} />
=======
    <Route path="/courses" element={<CoursesPage/>} />
    <Route path="/features" element={<SkillsPage />} />
    <Route path="/" element={<HomePage />} />
    <Route path="/vlab" element={<Vlab />} />
>>>>>>> 717b666c9b758d9a4fd8c95d6e06a6b2512ac866

    </Route>
  )
);

// Rendering the React app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);