import './ProoertyCard.css'
import BtnCard from '../BtnCard/BtnCard'

export default function ProoertyCard({imgCard,type,price,titleCard,Bed,Bath,Area,Floor,parking}) {
  return (
    <>
        <div className='card'>
            <img src={imgCard} alt="villa" />
            <div className='price'>
                <p className='type'>{type}</p>
                <p className='price-c'>{price}</p>
            </div>
            <h3 className='title'>{titleCard}</h3>
            <div className='info-p'>
                <p>Bedrooms:<span>{Bed}</span></p>
                <p>Bathrooms:<span>{Bath}</span></p>
                <p>Area:<span>{Area}</span></p>
                <p>Floor:<span>{Floor}</span></p>
                <p>Parking:<span>{parking}</span></p>
            </div>
            <div className='card-btn'>
                <BtnCard text= {'Schedule a visit'}/>
            </div>
        </div>
    </>
  )
}
