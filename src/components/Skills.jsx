import React from 'react'
import ProgressBar from './ProgressBar'
import './style.css';
import { Fade } from 'react-reveal';
const Skills = () => {
  return (
    <>
    <section className='section-bg m-3'  id="skills" style={{paddingTop:"70px"}}>
    <div className='container'>

      <h2 className='underlined'>Skills</h2>

      <div className="row " style={{marginTop:"20px"}}>
        <div className="col-lg-6">
        
        <Fade right>
        <div className="skill-box">
          <h5>Programming Languages</h5>
        <ProgressBar skillName="Java" percentage={85} />
        <ProgressBar skillName="JavaScript" percentage={75} />
        </div>
        </Fade>

        <Fade right>
      <div className="skill-box">
        <h5>Frameworks</h5>
      <ProgressBar skillName="Spring Boot" percentage={80} />
      <ProgressBar skillName="Hibernate" percentage={75} />
      </div>
      </Fade>

      <Fade right>
      <div className="skill-box">
        <h5>Web Technologies</h5>
      <ProgressBar skillName="React" percentage={85} />
      <ProgressBar skillName="HTML" percentage={95} />
      <ProgressBar skillName="CSS" percentage={90} />
      <ProgressBar skillName="BootStrap" percentage={90} />
      </div>
      </Fade>
      </div>

      <div className="col-lg-6">
      <Fade left>
      <div className="skill-box">
        <h5>Database</h5>
      <ProgressBar skillName="MySQL" percentage={70} />
      </div>
      </Fade>

      <Fade left>
      <div className="skill-box">
        <h5>Cloud Computing </h5>
      <ProgressBar skillName="AWS(Amazon Web Services)" percentage={60} />
      </div>
      </Fade>

      <Fade left>
      <div className="skill-box">
        <h5>Tools/Miscellaneous</h5>
      <ProgressBar skillName="Git/GitHub" percentage={90} />
      <ProgressBar skillName="Postman" percentage={80} />
      <ProgressBar skillName="Docker" percentage={60} />
      <ProgressBar skillName="Eclipse" percentage={90} />
      </div>
      </Fade>
      </div>
      </div>
    </div>
    </section></>
  )
}

export default Skills
