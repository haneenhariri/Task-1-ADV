import { cardDataHome } from '../../data/propData'
import ProoertyCard from '../ProoertyCard/ProoertyCard'
import Titel from '../Titel/Titel'
import './Properties.css'

export default function properties() {
  return (
    <section className='prop' id='properties'>
        <div className='prop-title'>
            <Titel p={'PROPERTIES'} h2={'We Provide The Best Property You Like'}/>
        </div>
        <div className='cards'>
            {cardDataHome.map((h)=>(
              <ProoertyCard
                key={h.id}
                imgCard={h.img}
                type={h.type}
                price={h.price}
                titleCard={h.title}
                Bed={h.Bed}
                Bath={h.Bath}
                Area={h.Area}
                Floor={h.floor}
                parking={h.parking}
              />
            ))}
        </div>
    </section>
  )
}
