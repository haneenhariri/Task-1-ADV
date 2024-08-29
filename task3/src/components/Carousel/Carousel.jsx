import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Carousel.css'
import { useState } from 'react'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
export default function Carousel({data}) {
    const [slide ,setSlide] = useState(0);
    const nextSlidec = () => {
        setSlide (slide === data.length -1 ? 0 : slide + 1)
    }
    
    const prevSlidec = () => {
        setSlide (slide === 0 ? data.length -1 :slide - 1)
    }

  return (
    <div className='slider'>
        <FontAwesomeIcon icon={faChevronLeft} className='arrow arrow-left' onClick={prevSlidec}/>
        {data.map((item,idx) =>
        {
            return <img key={idx} src={item.img} alt={item.alt} className={slide === idx ? 'slide' : 'slide slide-hidden'}/>
        })}
        <FontAwesomeIcon icon={faChevronRight} className='arrow arrow-right' onClick={nextSlidec}/>
        <span className='indicators'>
            {data.map((i,idx)=>{
                return <button key={idx} onClick={null} className={slide === idx ? 'indicator' : 'indicator indicator-inactive'}></button>
            })}
        </span>
    </div>
  )
}
