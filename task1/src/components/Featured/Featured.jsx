import Accordion from '../Accordion/Accordion'
import ServesList from '../ServesList/ServesList'
import Titel from '../Titel/Titel'
import './Featured.css'

export default function Featured() {
  return (
    <section className='feat'>
        <div className='feat-img'>
          <img className='F-img' src="./imag/Featured/featured.jpg" alt="featured" />
          <span className='feat-span'><img src="./imag/Featured/featured-icon.png" alt="Home" /></span>
        </div>
        <div className='m-feat'>
        <div className='f-titel'>
        <Titel p={"FEATURED"} h2={"Best Appartment & Sea View"} cN={"left"}/>
        </div>
        <Accordion/>
        </div>
        <ServesList page={true}/>
    </section>
  )
}
