import { navData } from "../../data/nav"
import './SideBar.css'
import ScheduleBtn from "../ScheduleBtn/ScheduleBtn"
import { infoData, infoIcon } from "../../data/info"
export default function SideBar({ isOpen, toggleSidebar }) {
  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div>
        <div className="nav-head head-side">
            <h3>VILLA</h3>
            <a href=""  onClick={(e) => { e.preventDefault(); toggleSidebar(); }}><img className="close" src="/public/imag/NavIcon/xmark-solid.svg" alt="" /></a>
        </div>
         <ul className=' ul-side'>
            {navData.map(index =>
                {
                    return(
                        <li className=' li-side' key={index.id}>
                            <a className='nav-link' href={index.link}>{index.title}</a>
                        </li>
                    )
                }
            )}
            <ScheduleBtn/>
         </ul>
        </div>
        <div>
        <div className='div-1'>
            <div className='info info-side'>
                {infoData.map(i=>{
                    return(
                        <a href={i.href} key={i.id} className='info-link'>
                            <img src={i.icon} alt={i.infoTitle} className='info-icon' />
                            <span>{i.infoTitle}</span>
                        </a>
                    )
                })}
            </div>
        </div>
        <div className='icons side-icons'>
            {infoIcon.map(j=>
                {
                    return(
                        <div className='social-icon'  key={j.id}>
                            <a href={j.href} className='link'>
                                <img src={j.icon} alt={j.socIcon} />
                            </a>
                        </div>
                    )
                }
            )}
        </div>
        </div>
    </nav>
  )
}
