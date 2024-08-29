import './App.css'
import NavBar from './components/NavBar/NavBar'
import  { useState } from 'react';
import SideBar from './components/SideBar/SideBar';
import InfoNav from './components/InfoNav/InfoNav';
import { Outlet } from 'react-router';

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
      <Outlet/>
    </>
  )
}

export default App
