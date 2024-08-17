import ProoertyCard from '../ProoertyCard/ProoertyCard'
import Titel from '../Titel/Titel'
import './Properties.css'

export default function properties() {
  return (
    <section className='prop' id='properties'>
        <div className='prop-title'>
            <Titel p={'PROPERTIES'} h2={'We Provide The Best Property You Like'}/>
        </div>
        <div className='cards'>
            <ProoertyCard/>
        </div>
    </section>
  )
}
