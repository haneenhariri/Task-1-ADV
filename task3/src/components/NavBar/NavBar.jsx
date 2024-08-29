import './NavBar.css'
import { navData } from '../../data/nav'
import ScheduleBtn from '../ScheduleBtn/ScheduleBtn'
import { NavLink } from 'react-router-dom';

export default function NavBar({toggleSidebar}) {
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
                            <NavLink className={`nav-link `} to={index.link}>{index.title}</NavLink>
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
