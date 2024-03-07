import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./side-bar.css"
import profileImg from "../../assets/profile_img.jpg"
import cvDocument from "../../assets/CesarLezama_CV.pdf"

export default function SideBar() {
  return (
    <div className="sidebar">
      <img src={profileImg}  alt="Mi imagen" />
      <h3>César Lezama</h3>
      <div className="school-info">
        <p>Software Engineering Student</p>
      </div>
      <div className="social-links">
        <a href="https://github.com/EmilCes" target='_blank'>
          <FontAwesomeIcon icon={ faGithub } />
        </a>
        <a href="https://www.linkedin.com/in/c%C3%A9sar-emiliano-lezama-l%C3%B3pez-04baa51b3/" target='_blank'>
          <FontAwesomeIcon icon={ faLinkedin }/>
        </a>
        <a href={cvDocument} download>CV</a>
      </div>
    </div>
  )
}
