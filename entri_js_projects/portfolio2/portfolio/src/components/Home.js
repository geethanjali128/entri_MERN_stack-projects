import React from 'react';

import profile from './assets/profile.jpeg'

const Home = () => {
  return (
    <div id='header'>
        <div className='body'>
        <h3>hello</h3>
        <h1>I am geethanjali</h1>
        <h4>Entry-level front-End Developer</h4>
      <a href='#contact'><button>Contact</button></a>
      </div>

      <div className='profile'>
        <img src={profile} alt='profile'/>
      </div>
    </div>
  )
}

export default Home;
