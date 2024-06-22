import React from 'react'
import about from './assets/about.png'
const About = () => {
  return (
    <div id='about'>
    <img src={about} alt='profile1' />
    <div className='content'>
   <h3>Let's Introduce about myself</h3>  
   <p>  
 I have recently completed my graduation in BSc(MPC). <br/> 
 In addition to my formal education ,<span style={{color:'darkolivegreen'}}>I dedicated a six months 
comprehensive MERN Stack web development certification program(Entri Elivate) at Entri Software Private Limited.</span>  <br/> 

 Regarding my Technical profile:<span style={{color:'darkseagreen'}}>I am skilled in MERN stack technologies 
such as Javascript , React.js, Express.js , HTML, CSS, css frameworks like Bootstrap ,Tailwind CSS and 
databases like MongoDB and MySQL and have  3 projects to my credit.</span>  <br/>  
 Speaking of my hobbies, I like to keep things organized and tidy at home, 
and I also love to listen to music ,which helps relax my mind. <br/> 
 I consider myself as an active listeners, adept at understanding others 
perspective. <br/>
 <button ><a target='_blank'  href='https://www.canva.com/design/DAF_laNT87s/Li56JpOxnSAdE9Ur2AVTsA/view?utm_content=DAF_laNT87s&utm_campaign=designshare&utm_medium=link&utm_source=editor'>Resume</a></button>
 <button><a  target='_blank'    href='https://codekaro.in/course-certificate/dfdf40dc1c9b6d81'>Certification</a></button>
 </p> 
    </div>
    
    </div>
  )
}

export default About
