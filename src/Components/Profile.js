import './Profile.css'
import profile1 from '../assets/Profile.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';


function Profile() {

return (
<section id="profile">
      <div class="section__pic-container">
        <img src={profile1} alt="Manav profile picture" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Manvendra</h1>
        <p class="section__text__p2">Full-Stack Developer</p>
        <div class="btn-container">
          <button
            class="btn btn-color-2"
            onclick="window.open('./assets/resume-example.pdf')"
          >
            Download CV
          </button>
          <button class="btn btn-color-1" onclick="location.href='./#contact'">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
        <a href="https://www.linkedin.com/in/manvendra-singh-rathore-ba40b2214"><img
            src={linkedin}
            alt="My LinkedIn profile"
            class="icon"
            onclick="location.href='https://linkedin.com/'"
          />
          </a>
           <a href="https://github.com/Manvendre">
          <img
            src={github}
            alt="My Github profile"
            class="icon"
            onclick="location.href='https://github.com/'"
          />
          </a>

        </div>
      </div>
    </section>)

}

export default Profile;