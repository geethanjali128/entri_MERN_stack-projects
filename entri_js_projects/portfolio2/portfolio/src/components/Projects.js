import React from 'react'
import project1 from './assets/project1.jpeg'
import project2 from './assets/project2.jpeg'
import project3 from './assets/project3.jpeg'

const Projects = () => {
  return (
    <div >
       <h3 style={{textAlign:'center'}}>My Projects</h3>
     <div id='projects'>
     
      <div className='project1'>
        <h3>Food Ordering App</h3>
        <img src={project1} alt='project1'/>
       
       
      </div>
      <div className='project2'>
        <h3>E commerce Application</h3>
        <img src={project2} alt='project2'/>
       
      </div>
      <div className='project3'>
        <h3>Netfilx like application</h3>
        <img src={project3} alt='project2'/>
       
      </div>
    </div>
    </div>
  )
}

export default Projects
