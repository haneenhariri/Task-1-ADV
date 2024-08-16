import './InfoNav.css'
import { infoData } from '../../data/info'
import { infoIcon } from '../../data/info'
export default function InfoNav() {
  return (
    <section className='InfoNav'>
        <div className='div-1'>
            <div className='info'>
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
        <div className='icons'>

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
    </section>
  )
}
