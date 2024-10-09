import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Components/Layout'; // Ensure Layout is defined
import CoursesPage from './Components/Features/CourcesPage';
import SkillsPage from './Components/Features/Skill';
import StudyMaterialPage from './Components/Features/StudyMaterialPage';
import HomePage from './Components/Features/HomePage';
import Load from './Components/Features/Loading/Load';

import Chatbot from "./Components/Features/Chatbot"
import SignUp from './Components/Auth/SignUp';
import Vlab from "./Components/Features/Vlab"
import AboutUs from './Components/Features/AboutUs';
import ProfilePage from './Components/Features/Profilepage';
import Contact from './Components/Features/Contact';

// Creating the router using react-router-dom
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

      
      
      
    <Route path="/courses" element={<CoursesPage/>} />
    <Route path="/features" element={<SkillsPage />} />
    <Route path="/home" element={<HomePage />} />

    <Route path="/courses" element={<CoursesPage/>} />
     <Route path="/study-material/:subject" element={<StudyMaterialPage />} />
      
    <Route path="/features" element={<SkillsPage />} />
    <Route path="/" element={<HomePage />} />
    <Route path="/vlab" element={<Vlab />} />
    <Route path="/Chatbot" element={<Chatbot />} />

    <Route path='/about' element={<AboutUs/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/profile' element={<ProfilePage/>}/>
    <Route path='/contact' element={<Contact/>}/>


    </Route>
  )
);

// Rendering the React app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);