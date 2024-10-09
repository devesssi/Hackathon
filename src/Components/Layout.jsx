import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
//import Skill from "./Features/Skill"
//import CoursesPage from './Features/CourcesPage'

function Layout() {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   
   </>
  )
}

export default Layout
