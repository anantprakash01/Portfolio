import React from 'react'
import me from './imgs/me.jpg'
const About = () => {
  return (
    <>
         <section id="about"  className="about" style={{paddingTop:"70px"}}>
      <div className='container'>

        <div >
          <h2 className='underlined'>About</h2>
        </div>

        <div className="row mx-3 my-5">
          <div className="col-lg-3 " data-aos="fade-right">
            <img src={me} className="img-thumbnail my-2" style={{ width: '230px', height: '300px' }}  alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3 className='underlined'>Java Developer</h3>
            <p className="fst-italic">
            I am a Java Developer with a focus on full-stack development. My areas of expertise include Java, Spring Boot, React, MySQL, JavaScript and RESTful APIs. I possess a solid understanding of these technologies and leverage my skillset to create robust and scalable solutions for complex problems.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Anant Prakash</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 Sep 2002</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>anantprakash0901@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 7079698562</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Darbhanga(Bihar), India</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor's (CSE)</span></li>
                  {/* <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li> */}
                  {/* <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default About
