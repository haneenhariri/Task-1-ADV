import './SectionProperty.css'
import Accordion from '../../components/Accordion/Accordion'
import ServesList from '../../components/ServesList/ServesList'
import PropertyInfo from '../propertyInfo/propertyInfo'

export default function SectionProperty() {
  return (
    <section className='section-Pro'>
        <div className='part-1'>
            <PropertyInfo type={'Apparment'} info={'24 New Street Miami,OR 24560'}/>
            <p className='pro-p-info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, adipisci sequi rerum eaque nulla aliquam ad commodi. Quisquam inventore at recusandae quasi minima! Quod cupiditate nihil quis eos ratione rem nam deleniti provident commodi numquam blanditiis facilis nisi, libero, ex minima corporis? Deserunt voluptatibus eum, reiciendis saepe placeat molestias! Dolor!</p>
            <p className='pro-p-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores molestias praesentium tempore soluta at? Repellendus nesciunt id rerum voluptate repudiandae!</p>
            <Accordion/>
        </div>
        <ServesList page ={true}
        />
    </section>
  )
}
