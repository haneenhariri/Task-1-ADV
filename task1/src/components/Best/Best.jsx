import './Best.css'
import ServesList from '../ServesList/ServesList'
import Titel from '../Titel/Titel'
import ScheduleBtn from '../ScheduleBtn/ScheduleBtn'

export default function Best() {
  return (
    <section className='best'>
      <div className='best-head'>
        <div className='best-title'>
            <Titel p={'BEST DEAL'} h2={'Find Your Best Deal Right Now!'}/>
        </div>
        <div className='best-content'>
          <ServesList page={false}/>
          <div>
             <img className='content-img' src="./imag/BestImg/deal-01.jpg" alt="" />
          </div>
          <div className='text'>
              <h3>Extra Info About Property</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt qui vitae necessitatibus maiores omnis? Dicta porro ab possimus excepturi ducimus corrupti! Iusto molestiae autem magni quis. In beatae odit similique.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, quibusdam.</p>
          </div>
        </div>
        <div className='btn-left'>
          <ScheduleBtn/>
        </div>
      </div>

    </section>
  )
}
