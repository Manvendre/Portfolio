import './About.css'
import aboutpic from '../assets/picofme1.png';
import education from '../assets/education.png';
import experience from '../assets/experience.png';
import arrow from '../assets/arrow.png';

function About(){
    return ( <section id="about">
    <p class="section__text__p1">Get To Know More</p>
    <h1 class="title">About Me</h1>
    <div class="section-container">
      <div class="section__pic-container">
        <img
          src={aboutpic}
          alt="Profile picture"
          class="about-pic"
        />
      </div>
      <div class="about-details-container">
        <div class="about-containers">
          <div class="details-container">
            <img
              src={experience}
              alt="Experience icon"
              class="icon"
            />
            <h3>Experience</h3>
            <p>1+ years <br />Full-Stack Development</p>
          </div>
          <div class="details-container">
            <img
              src={education}
              alt="Education icon"
              class="icon"
            />
            <h3>Education</h3>
            <p>Btech In CS<br />Piet Jaipur</p>
          </div>
        </div>
        <div class="text-container">
          <p>
          I am a Full-Stack developer dedicated to improving skills through hands-on
          learning and development work. Proficient in web application and API. Adept 
          at using HTML, CSS, JavaScript and Pythonprogramming languages to produce 
          clean code. Well-organized and collaborative team player withstrong communication 
          and analytical abilities
          </p>
        </div>
      </div>
    </div>
    <img
      src={arrow}
      alt="Arrow icon"
      class="icon arrow"
      onclick="location.href='./#experience'"
    />
  </section>)
}

export default About;