import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Fade } from 'react-reveal';

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact" style={{ paddingTop: "70px" }}>
        <Fade bottom>
          <div className="container">
            <div className="section-title">
              <h2 className="underlined">Contact</h2>
            </div>

            <div className="row" data-aos="fade-in">
              <Fade left>
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i>
                      <LocationOnIcon />
                    </i>
                    <h4>Location:</h4>
                    <p>Darbhanga(Bihar) - India</p>
                  </div>

                  <div className="email">
                    <i>
                      <EmailIcon />
                    </i>
                    <h4>Email:</h4>
                    <p>anantprakash09901@gmail.com</p>
                  </div>

                  <div className="phone">
                    <i>
                      <CallIcon />
                    </i>
                    <h4>Call:</h4>
                    <p>+91 7079698562</p>
                  </div>

                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe> */}
                </div>
              </div>
              </Fade>

              <Fade right>
              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form className="php-email-form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="10"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
              </Fade>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
}

export default Contact
