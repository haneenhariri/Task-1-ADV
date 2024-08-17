import './ProoertyCard.css'
import { cardData } from '../../data/propData'
import BtnCard from '../BtnCard/BtnCard'
export default function ProoertyCard() {
  return (
    <>
        {cardData.map((item,idx)=>
        {
            return(
                <div key={idx} className='card'>
                    <img src={item.img} alt="villa" />
                    <div className='price'>
                        <p className='type'>{item.type}</p>
                        <p className='price-c'>{item.price}</p>
                    </div>
                    <h3 className='title'>{item.title}</h3>
                    <div className='info-p'>
                        <p>Bedrooms:<span>{item.Bed}</span></p>
                        <p>Bathrooms:<span>{item.Bath}</span></p>
                        <p>Area:<span>{item.Area}</span></p>
                        <p>Floor:<span>{item.floor}</span></p>
                        <p>Parking:<span>{item.parking}</span></p>
                    </div>
                    <div className='card-btn'>
                        <BtnCard text= {'Schedule a visit'}/>
                    </div>
                </div>
            )
        })}
    </>
  )
}
