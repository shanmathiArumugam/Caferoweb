import React from 'react'
import './Home.css'
import {CardMedia} from '@mui/material'

const About = () => {
  return (
    <div>
        <section class="about" id="about">
        <div class="about-img">
        <CardMedia
              component="img"
              alt="Sample Image 2"
              height="200"
              src="https://i.pinimg.com/564x/c5/3e/e3/c53ee3d913a5d47bd2993ae4ca766383.jpg"
              title="Sample Image 2"
            />
        </div>

        <div class="about-text">
            <h2>About<span> us</span></h2>
            <h4>A Coffee Shop</h4>
            <p>Caffeo, a cozy coffee haven nestled on the corner of Main Street, greets you with the rich aroma of freshly roasted beans. Its warm, rustic decor and dimly lit ambiance make it the perfect retreat for coffee connoisseurs and casual visitors alike. From velvety cappuccinos to robust pour-over brews, Caffeo offers a diverse menu that caters to every caffeine craving.Whether you're seeking a quick pick-me-up or a serene spot to savor your latte, Caffeo has your coffee needs covered. </p>
                <a href="#" class="btn">More About</a>
        </div>
    </section>
    </div>
  )
}

export default About
