import './PropertyInfo.css'

export default function PropertyInfo({type,info}) {
  return (
    <div className='parent-info'>
      <img className='img-pro' src='./imag/BestImg/img.jpg' alt="villa" />
      <p className='type info-type'>{type}</p>
      <h2 className='h2ProInfo'>{info}</h2>
    </div>
  )
}
