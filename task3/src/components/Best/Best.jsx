import './Best.css'
import Titel from '../Titel/Titel'
import ScheduleBtn from '../ScheduleBtn/ScheduleBtn'
import FiltrBtn from '../FiltrBtn/FiltrBtn'
import { useState } from 'react'

export default function Best() {
  const [content, setContent] = useState(
    {
      img: './imag/BestImg/deal-01.jpg',
      title: 'Extra Info About Property',
      p1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt qui vitae necessitatibus maiores omnis? Dicta porro ab possimus excepturi ducimus corrupti! Iusto molestiae autem magni quis. In beatae odit similique.',
      p2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, quibusdam.',
      pList: '185 m2',
      Floor: '26th',
      Room: '4',
      parking:'Yes',
      payment:'Bank'
    }
  );
  return (
    <section className='best'>
        <div className='best-head'>
          <div className='best-title'>
              <Titel p={'BEST DEAL'} h2={'Find Your Best Deal Right Now!'}/>
          </div>
          <FiltrBtn onBtnChange={setContent}/>
        </div>
        <div className='best-content'>
          <div className='ServList'>
               <div className='row'>
                    <div className='List-2'>
                        <span className='span-serv'>Total Flat Space</span>
                        <p className='p-serv'>{content.pList}</p>
                    </div>
                </div>
               <div className='row'>
                    <div className='List-2'>
                        <span className='span-serv'>Floor number</span>
                        <p className='p-serv'>{content.Floor}</p>
                    </div>
                </div>
               <div className='row'>
                    <div className='List-2'>
                        <span className='span-serv'>Number of rooms</span>
                        <p className='p-serv'>{content.Room}</p>
                    </div>
                </div>
               <div className='row'>
                    <div className='List-2'>
                        <span className='span-serv'>Parking Available</span>
                        <p className='p-serv'>{content.parking}</p>
                    </div>
                </div>
               <div className='row'>
                    <div className='List-2'>
                        <span className='span-serv'>Payment Process</span>
                        <p className='p-serv'>{content.payment}</p>
                    </div>
                </div>
          </div>
          <div>
             <img className='content-img' src={content.img} alt="" />
          </div>
          <div className='text'>
              <h3>{content.title}</h3>
              <p>{content.p1}</p>
              <p>{content.p2}</p>
          </div>
        </div>
        <div className='btn-left'>
          <ScheduleBtn/>
        </div>

    </section>
  )
} 
