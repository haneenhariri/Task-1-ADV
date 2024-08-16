import './OrangCard.css'
import { num } from '../../data/orangData'
export default function OrangCard() {
  return (
    <section className='orang-card'>
      {num.map((item,index)=>
    {
        return(
            <div key={index} className='card-O'>
                <p className='p-num'>{item.numC}</p>
                <p className='p-O'>{item.p}</p>
                <span className='orang'></span>
            </div>
        )
    })}
    </section>
  )
}
