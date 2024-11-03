import React from 'react'
import '../App.css';
import 'animate.css';
import '../newsletter.css'

export default function home() {
  return (
    <>
      <div className=" hero">
        <div className="left-div">
          <h4 className='name'>Sudarshan K</h4>
          {/* <h1 class="animate__animated animate__bounce">An animated element</h1> */}
          <h5 className='sub-title'>Computer Science Student | Full Stack Developer</h5>
          <p className='desc-1'><span>Welcome to My Portfolio!</span>

            I am a Computer Science student specializing in Information Science and Engineering (ISE), currently in my 8th semester at MS Ramaiah University Of Applied Sciences, Peenya, Bengaluru. With a CGPA of 8.2, I have been actively honing my skills in software development, with a strong focus on Java, JavaScript, and MySQL.

          </p>
          <button className='click-here'>Let's Get Started</button>
        </div>
        <div className="border-radius">
          <img src='home.webp' className='name-img animate__animated'></img>
        </div>

      </div>
      <div className='showcase'>
        <div className='showcase1'>
          <span className='numbers animate__animated animate__slideInUp'>5+</span>
          PROJECTS
        </div>
        <div className='showcase1'>
          <span className='numbers animate__animated animate__slideInUp'>1</span>
          INTERNSHIP
        </div>
        <div className='showcase1'>
          <span className='numbers animate__animated animate__slideInUp'>3+</span>
          CERTIFICATIONS
        </div>

      </div>
      <div className='intern'>
        {/* <h4>INTERNSHIP</h4> */}
        <div className='internship'>
          <div className='internship1'>
            <span className='name1'>Full Stack Developer Intern <span className='company'>Omnify Inc</span></span>
            <span>Jun 2023 - Oct 2023</span>

            <ul className='ul-intern'>
              <li>Redesigned the company website using HTML, CSS, and JavaScript.</li>
              <li>Resolved backend bugs to ensure website functionality.</li>
              <li>Contributed to the agile development process, including sprint planning and code reviews.</li>
            </ul>
            
          </div>
          <img src='intern.webp' className='company-img'></img>
        </div>
      </div>
      <div className='achievements'>
        <div className='achievements1'>
          <img src='certification.png' className='achieve-img'></img>
          <div className='achieve-desc'>
            <span className='company1'>Certification for project in Morse Code-based Authentication for Military Application</span>
            <ul className='ul-intern'>
              <li>Utilized Harsh cascade and LBPH algorithms for authentication system development</li>
              <li>Demonstrated proficiency in Morse code integration for secure military communication</li>
              <li> Developed and presented project exhibition showcasing practical application in military scenarios</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="subscribe">
        <h2 class="subscribe__title">Let's keep in touch</h2>
        <p class="subscribe__copy">Subscribe to keep up with fresh news and exciting updates. We promise not to spam you!</p>
        <div class="form">
          <input type="email" class="form__email" placeholder="Enter your email address" />
          <button class="form__button">Send</button>
        </div>
        <div class="notice">
          <input type="checkbox"/>
            <span class="notice__copy">I agree to my email address being stored and uses to recieve monthly newsletter.</span>
        </div>
      </div>
    </>
  )
}
