import './App.css'
import InfoNav from './components/InfoNav/InfoNav'
import NavBar from './components/NavBar/NavBar'
import  { useState } from 'react';
import SideBar from './components/SideBar/SideBar';
import Hero from './components/Hero/Hero';
import ServesList from './components/ServesList/ServesList';
import Featured from './components/Featured/Featured';
import Best from './components/Best/Best';
import ViewSection from './components/ViewSection/ViewSection';


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
      <Featured/>
      <ViewSection/>
    </>
  )
}

export default App
