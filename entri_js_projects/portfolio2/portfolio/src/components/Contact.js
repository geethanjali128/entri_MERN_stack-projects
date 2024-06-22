import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'



 const Contact = () => {
  const form = useRef();

 
  const[name,setName]=useState("")
   const[email,setEmail]=useState("")
    const[text,setText]=useState("")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q10t0ux', 'template_f3cgbmr', form.current, {
        publicKey: 'KI1kwktpR1ZLC_nOv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
     
      alert("success")

        setName("")
        setEmail("")
        setText("")
        
  };

  return (
    <div className='contactPage'>
    <div  id='contact'>
      <h3>Contact Me</h3>
    <form ref={form} onSubmit={sendEmail}>
     
      <input type="text" name="from_name"    value={name}   placeholder='Enter Your Name'  onChange={(e)=>{setName(e.target.value)}} /><br/>
     
      <input type="email" name="from_email"  value={email}  placeholder='Enter Your Email' onChange={(e)=>{setEmail(e.target.value)}} /><br/>
     
      <textarea name="message"  value={text}  placeholder='Meassage' onChange={(e)=>{setText(e.target.value)}}   /><br/>
      <input type="submit" value="Send" id='submit' />
    </form>
    </div>
    <div className='footer'>
       <p> <a  target='_blank'   href='https://www.linkedin.com/in/geethanjali-karra/'><img src={linkedin} alt='linkedin'/></a></p>
      <p><a  target='_blank'   href='https://github.com/geethanjali128'><img src={github} alt='git hub'/></a></p> 
    </div>
    </div>
  );
};

export default Contact