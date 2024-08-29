import './ContCard.css'

export default function ContCard({imgCon,hrefCon,spanCon}) {
  return (
        <div className='cont-card'>
            <img src={imgCon} alt="phone" />
            <div className='cont-card-text'>
                <a className='link-cont' href="tel:010-020-0340">{hrefCon}</a>
                <span>{spanCon}</span>
            </div>
        </div>
  )
}
