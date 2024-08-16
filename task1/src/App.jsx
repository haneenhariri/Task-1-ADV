import './App.css'
import InfoNav from './components/InfoNav/InfoNav'
import NavBar from './components/NavBar/NavBar'
import  { useState } from 'react';
import SideBar from './components/SideBar/SideBar';
import Hero from './components/Hero/Hero';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <InfoNav/>
      <NavBar toggleSidebar={toggleSidebar}/>
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Hero/>
    </>
  )
}

export default App
