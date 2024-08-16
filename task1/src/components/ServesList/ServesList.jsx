import './ServesList.css'
import { listOne } from '../../data/servseData'
import { listSec } from '../../data/servseData'

export default function ServesList({page}) {
  return (
    <div className='ServList'>
        {page? listOne.map((item,index)=>
        {
            return(
                <div key={index} className='row'>
                    <img src={item.listIcon} alt={item.p} />
                    <div className={item.className}>
                        <p className='p-serv'>{item.p}</p>
                        <span className='span-serv'>{item.span}</span>
                    </div>
                </div>
            )
        })
        :
        listSec.map((item,index)=>
        {
            return(
                <div key={index} className='row'>
                    <div className={item.className}>
                        <span className='span-serv'>{item.span}</span>
                        <p className='p-serv'>{item.p}</p>
                    </div>
                </div>
            )
        })
    }
    </div>
  )
}
