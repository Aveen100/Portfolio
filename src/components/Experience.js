import './EducationStyle.css';
import 'react-toastify/dist/ReactToastify.css';


export default function Education({ id }) {
  return (
    <div className='contact-window' id={id}>
      <h1 className='MainHeading'>Experience</h1>
      <div className="contact-container">
        <div className="education-section">
          <div className="education-item">
            <h3>Software Engineer</h3>
            <p className="institution">Magnatec Systems Private Limited, Lahore, Pakistan</p>
            <p className="duration">October 2023 - Current</p>
          </div>
          <div className="education-item">
            <h3>Software Engineer (Intern)</h3>
            <p className="institution">Magnatec Systems Private Limited, Lahore, Pakistan</p>
            <p className="duration">April 2023 - October 2023</p>
          </div>
          <div className="education-item">
            <h3>Trainee Web Developer</h3>
            <p className="institution">Programmers Force Private Limited, Lahore , Pakistan</p>
            <p className="duration">November 2022 - Januray 2023</p>
          </div>
        </div>
      </div>

    </div>
  )
}