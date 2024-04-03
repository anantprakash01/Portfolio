import React from 'react'
import {Typewriter} from 'react-simple-typewriter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Fade } from 'react-reveal';


export default function TopContainer() {

  return (
    <div>
      <section
        id="home"
        className="d-flex flex-column justify-content-center align-items-center border border-red" style={{overflow:"hidden"}}
      >
        <div className="home-container">
          <Fade left>

          <h1>Anant Prakash</h1>
          </Fade>
          
          <Fade right> 

          <p>
            I{" "}
            <span><Typewriter 
            words={['am a Developer.', 'Love Programming.', 'am a Freelancer.']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={120}
            deleteSpeed={70}
            
            /></span>
          </p>
          </Fade>

          <Fade bottom>
        <div className='social-cntr' id='ic'>
          
          <a href="https://github.com/anantprakash01"><GitHubIcon className='test' /></a>
          <a href="https://www.linkedin.com/in/anant-prakash-331870192/"><LinkedInIcon className='test' /></a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FAnant_Pritam_07"><TwitterIcon className='test'/></a>
          <a href="https://www.instagram.com/ap__originals/"><InstagramIcon className='test'/></a>
          <a href="#"><FacebookIcon className='test'/></a>
          
          
          
          
          {/* <i class="fa fa-instagram" aria-hidden="true"></i> */}
        </div>
        </Fade>


        </div>
        

      </section>
    </div>
  )
}
