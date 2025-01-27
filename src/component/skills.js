import React from 'react'
import LineChart from './linechart'


export default function skills() {
  return (
    <div>
      <div className='name'>Skills and Tools</div>
      <div className='grid-skills'>
      
      <img src="html-5_5968267.png" className='skills-img'></img>
      <img src="social_11516361.png" className='skills-img'></img>
      <img src="js_5968292.png" className='skills-img'></img>
      <img src="logo_12868746.png" className='skills-img'></img>
      <img src="bootstrap_5968672.png" className='skills-img'></img>
      <img src="react.png" className='skills-img'></img>
      <img src="java_226777.png" className='skills-img'></img>
      <img src="docker_919853.png" className='skills-img'></img>
      <img src="mysql_919836.png" className='skills-img'></img>
      <img src="csharp.png" className='skills-img'></img>
      <img src="sqlserver.png" className='skills-img'></img>
      </div>
      <div className='skills'>
        
      </div>
      <div className='name'>Academic progress</div>
      <div className='skills'>
        <div className='skills-desc'>
          <ul className='ul-skills'>
            <li><span className='highliter'>Programming Languages:</span> Gained proficiency in multiple programming languages, including Python, Java, C#, and JavaScript. This has enabled me to develop a versatile coding skill set applicable to various domains, from web development to software engineering.
            </li>
            <li>
            <span className='highliter'>Data Structures and Algorithms:</span> Built a solid foundation in essential computer science concepts such as data structures (arrays, linked lists, trees) and algorithms (sorting, searching). I have applied these concepts to optimize code performance and solve complex problems efficiently.
            </li>
            <li>
            <span className='highliter'>Web Development:</span> Acquired skills in front-end and back-end web development. I have built dynamic and responsive web applications using HTML, CSS, JavaScript, React, Node.js, and Express.js, along with database management using MySQL and MongoDB.
            </li>
            <li>
            <span className='highliter'>Software Engineering:</span> Learned software development methodologies, including Agile and Scrum, to manage projects and collaborate effectively in team environments. My experience includes version control using Git and GitHub, as well as continuous integration and deployment practices.
            </li>
            <li>
            <span className='highliter'>Database Systems:</span> Studied relational and non-relational database management systems. I have designed and implemented databases using SQL and NoSQL technologies, ensuring efficient data storage, retrieval, and manipulation.
            </li>
            <li>
            <span className='highliter'>Operating Systems:</span> Explored the principles of operating systems, including process management, memory management, file systems, and concurrency. This knowledge has provided me with a deep understanding of how software interacts with hardware.
            </li>
            <li>
            <span className='highliter'>Computer Networks:</span> Gained insight into network protocols, architectures, and security. I have worked on projects involving network configuration, troubleshooting, and the development of networked applications.
            </li>

          </ul>

        </div>
        <LineChart />
      </div>
      

    </div>
  )
}
