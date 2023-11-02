import React from 'react'
import './Home.css'
import {CardMedia} from '@mui/material'
const Contact = () => {
  return (
    <div> 
      <section class="contact" id="contact">
    <div class="contact-img">
    <CardMedia
          component="img"
          alt="Sample Image 2"
          height="200"
          src="https://i.pinimg.com/564x/bd/7b/67/bd7b67f2db91b4bb841f925217a666ca.jpg"
          title="Sample Image 2"
        />
    </div>
    <div class="contact-text">
        <div style={{marginBottom:'70px'}}>
       <h2>Contact<span> us</span></h2></div>
       <h4>Address: <p>Caffeo,Erode.</p></h4>
       <h4>Mail:<p>caffeo@gmail.com</p></h4>
       <h4>Phone:<p>+91 8765432871</p></h4>
    </div>
</section></div>
  )
}

export default Contact