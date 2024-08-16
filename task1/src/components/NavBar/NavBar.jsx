import './NavBar.css'
import { navData } from '../../data/nav'
import ScheduleBtn from '../ScheduleBtn/ScheduleBtn'

export default function NavBar({ toggleSidebar }) {
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
                            <a className='nav-link' href={index.link}>{index.title}</a>
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
            <ScheduleBtn/>
         </ul>

    </nav>
  )
}
