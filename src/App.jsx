import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from './Components/Footer'
import Main from "./Components/Main"
import VirtualLabRedirect from './Features/vlab'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Main/>
    <Footer/>  
    
    </>
  )
}

export default App
