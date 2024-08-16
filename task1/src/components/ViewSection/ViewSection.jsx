import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Titel from '../Titel/Titel'
import './ViewSection.css'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
export default function ViewSection() {
  return (
    <section className='view'>
      <div className='v-title'>
        <Titel p={'VIDEO VIEW'} h2={'Get Closer View & Different Feeling'}/>
      </div>
      <div className='video'>
        <img src="./imag/ViewImg/video-frame.jpg" alt="video" />
        <span className='play'><FontAwesomeIcon icon={faCirclePlay} /></span>
      </div>
    </section>
  )
}
