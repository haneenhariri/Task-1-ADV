import './Form.css'
import BtnCard from '../BtnCard/BtnCard'
export default function Form() {
  return (
    <form className='form-c'>
        {/* name */}
        <label>Full Name</label>
        <input type="text" placeholder='Your Name...' />
        {/* email */}
        <label htmlFor="">Email Address</label>
        <input type="email" placeholder='Your E-mail...'/>
        {/* subject */}
        <label htmlFor="">Subject</label>
        <input type="text" placeholder='Subject...' />
        {/* message */}
        <label htmlFor="">Message</label>
        <textarea placeholder='Your Message'></textarea>
        {/* btn send */}
        <BtnCard text={'Send Message'} />
    </form>
  )
}
