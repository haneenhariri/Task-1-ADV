import Carousel from '../Carousel/Carousel'
import { slidData } from '../../data/SlidData'
import './Hero.css'
export default function Hero() {
  return (
    <section className='hero' id='home'>
        <Carousel data={slidData}/>
        <div className='hero-title'>
          <p className='hero-p'>Tronto,<span>Canada</span></p>
          <h1 className='hero-h1'>HURRY! GET THE BEST VILLA FOR YOU</h1>
        </div>
    </section>
  )
}
