import './Form.css'
import BtnCard from '../BtnCard/BtnCard'
export default function Form() {
  return (
    <form className='form-c'>
        {/* name */}
        <label htmlFor='name'>Full Name</label>
        <input id='name' name='your name' type="text" placeholder='Your Name...' />
        {/* email */}
        <label htmlFor="email">Email Address</label>
        <input id='email' name='your email' type="email" placeholder='Your E-mail...'/>
        {/* subject */}
        <label htmlFor="subject">Subject</label>
        <input id='subject' name='subject' type="text" placeholder='Subject...' />
        {/* message */}
        <label htmlFor="message">Message</label>
        <textarea id='message' name='message' placeholder='Your Message'></textarea>
        {/* btn send */}
        <BtnCard text={'Send Message'} />
    </form>
  )
}
