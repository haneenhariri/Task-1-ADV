import ContCard from '../ContCard/ContCard'
import Form from '../Form/Form'
import Titel from '../Titel/Titel'
import './SectionContact.css'

export default function SectionContact() {
  return (
    <section className='sectionContact'>
      <div className='divContant-1'>
        <div className='divTitelCon'>
          <div className='contact-title'>
            <Titel p={'CONTACT'} h2={'Get In Touch With Our Agents'}/>
          </div>
          <p className='contact-p-section'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quos minus tempore, ipsa accusamus ducimus distinctio cum numquam deserunt. Minima assumenda qui laboriosam veniam asperiores, itaque voluptatum. Non, aspernatur quasi.
          </p>
          <div className='conCardInfo'>
            <ContCard imgCon={"imag/ContactIcon/phone-icon.png"}
            hrefCon={'010-020-0340'}
            spanCon={'Phone Number'}
            />
            <ContCard imgCon={"/imag/ContactIcon/email-icon.png"}
            hrefCon={'info@villa.com'}
            spanCon={'Business Email'}
            />  
          </div>
        </div>
        <div className='form'>
                <Form/>
        </div>
      </div>
      <div className='mapCon'>
      <iframe className='map-iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20296.914297096406!2d-80.10503685360025!3d25.93452098273211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1f7616846d%3A0x7de2ae1c5b579463!2sSol%C3%A9%20Miami%2C%20A%20Noble%20House%20Resort!5e0!3m2!1sar!2sde!4v1723897162838!5m2!1sar!2sde" ></iframe>
      </div>
    </section>
  )
}
