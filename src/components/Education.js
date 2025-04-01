import './EducationStyle.css';
import 'react-toastify/dist/ReactToastify.css';

export default function Education({ id }) {

  return (
    <div className='contact-window' id={id}>
      <h1 className='MainHeading'>Education</h1>
      <div className="contact-container">
        <div className="education-section">
          <div className="education-item">
            <h3>BACHELOR OF INFORMATION TECHNOLOGY</h3>
            <p className="institution">University of Management and Technology, Lahore, Pakistan</p>
            <p className="duration">2018 - 2022</p>
          </div>
          <div className="education-item">
            <h3>FSC PRE ENGINEERING</h3>
            <p className="institution">Forman Christian College,Lahore, Pakistan</p>
            <p className="duration">2016 - 2018</p>
          </div>
          <div className="education-item">
            <h3>MATRIC</h3>
            <p className="institution">Cantt Public High School, Lahore , Pakistan</p>
            <p className="duration">2016</p>
          </div>
        </div>

      </div>
    </div>
  )
}