import './NavBar.css'
import { navData } from '../../data/nav'
import ScheduleBtn from '../ScheduleBtn/ScheduleBtn'
import { useEffect, useState } from 'react';

export default function NavBar({toggleSidebar}) {
  /* hocks for active section color */
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      navData.forEach((index) => {
        const section = document.querySelector(index.link);
        if (section) {
          const offset = section.offsetTop - 100;
          const height = section.offsetHeight;
          const scrollPosition = window.scrollY;

          if (scrollPosition >= offset && scrollPosition < offset + height) {
            setActiveSection(index.link);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  /* nav bar */
  return (
    <nav className='navbar'>
         <div className='nav-head'>
          <h3 className='logo'>VILLA</h3>
         </div>
         <ul className='ul-nav'>
            {navData.map(index =>
                {
                    return(
                        <li className='nav-li' key={index.id}>
                            <a className={`nav-link ${activeSection === index.link ? 'active' : ''}`} href={index.link}>{index.title}</a>
                        </li>
                    )
                }
            )}
            <li className='ham-menu' >
              <a href="" className='ham-link'  onClick={(e) => { e.preventDefault(); toggleSidebar(); }}>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </li>
            <div className='schedule-nav'>
            <ScheduleBtn />
            </div>
         </ul>

    </nav>
  )
}
