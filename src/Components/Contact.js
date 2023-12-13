import './Contact.css'
import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png';

function Contact(){
    return(<section id="contact">
    <p class="section__text__p1">Get in Touch</p>
    <h1 class="title">Contact Me</h1>
    <div class="contact-info-upper-container">
      <div class="contact-info-container">
        <img
          src={email}
          alt="Email icon"
          class="icon contact-icon email-icon"
        />
        <p><a href="mailto:777manvendra@gmail.com">777manvendra@gmail.com</a></p>
      </div>
      <div class="contact-info-container">
        <img
          src={linkedin}
          alt="LinkedIn icon"
          class="icon contact-icon"
        />
        <p><a href="https://www.linkedin.com/in/manvendra-singh-rathore-ba40b2214">LinkedIn</a></p>
      </div>
    </div>
  </section>)
}

export default Contact;