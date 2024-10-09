import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Components/Layout'; // Ensure Layout is defined
import CoursesPage from './Components/Features/CourcesPage';
import SkillsPage from './Components/Features/Skill';
import Chatbot from './Components/Features/chatbot';

import HomePage from './Components/Features/HomePage';
import Load from './Components/Features/Loading/Load';
import Vlab from './Components/Features/vlab';



import Vlab from "./Components/Features/Vlab"
import AboutUs from './Components/Features/AboutUs';

// Creating the router using react-router-dom
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

      
      
      
    <Route path="/courses" element={<CoursesPage/>} />
    <Route path="/features" element={<SkillsPage />} />
    <Route path="/home" element={<HomePage />} />

    <Route path="/courses" element={<CoursesPage/>} />
    <Route path="/features" element={<SkillsPage />} />
    <Route path="/" element={<HomePage />} />
    <Route path="/vlab" element={<Vlab />} />
    <Route path="/Chatbot" element={<Chatbot />} />

    <Route path='/about' element={<AboutUs/>}/>


    </Route>
  )
);

// Rendering the React app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);