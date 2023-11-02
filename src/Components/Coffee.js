import React from 'react'
import './Home.css'
import {CardMedia} from '@mui/material'
const Coffee = () => {
  return (
    <div><section class="coffee" id="coffee">
    <div class="main-text">
        <h2><span>Our</span> Coffees</h2>
        <p style={{marginTop: '20px'}}>What we provide</p>
    </div>
    <div class="coffee-content">
        <div class="row">
        <CardMedia
          component="img"
          alt="Sample Image 2"
          height="200"
          src="https://i.pinimg.com/564x/fe/7f/57/fe7f5757ea42b555a33eb40804fecc4e.jpg"
          title="Sample Image 2"
        />
            <h3>Espresso</h3>
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p>₹70.00</p>
        </div>
    
        <div class="row">
        <CardMedia
          component="img"
          alt="Sample Image 2"
          height="200"
          src="https://i.pinimg.com/564x/63/c7/2c/63c72c1bf187d91e9a7e699d8b8d01f0.jpg"
          title="Sample Image 2"
        />
            <h3>Caffè mocha</h3>
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p>₹120.00</p>
        </div>
    
        <div class="row">
        <CardMedia
          component="img"
          alt="Sample Image 2"
          height="200"
          src="https://i.pinimg.com/564x/14/63/a8/1463a8b6d5f54a6bd4b10cbd3f9a0ce3.jpg"
          title="Sample Image 2"
        />
            <h3>Turkish Coffee</h3>
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p>₹160.00</p>
        </div>
        <div class="row">
        <CardMedia
          component="img"
          alt="Sample Image 2"
          height="200"
          src="https://i.pinimg.com/564x/87/e5/d3/87e5d30ac3855fb8e862db1d191547d2.jpg"
          title="Sample Image 2"
        />
            <h3>Affogato</h3>
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p>₹110.00</p>
        </div>
    
        <div class="row">
        <CardMedia
          component="img"
          alt="Sample Image 2"
          height="200"
          src="https://i.pinimg.com/564x/2f/15/bf/2f15bf620628090eedcece52dd95ad85.jpg"
          title="Sample Image 2"
        />
            <h3>Cortado</h3>
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p>₹90.00</p>
        </div>
    
        <div class="row">
        <CardMedia
          component="img"
          alt="Sample Image 2"
          height="200"
          src="https://i.pinimg.com/564x/58/7f/1a/587f1a0645cc104992359b36fdff37ed.jpg"
          title="Sample Image 2"
        />
            <h3>Flat White Coffee</h3>
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p>₹140.00</p>
        </div>
    </div>
    <a href="#" class="btn" style={{marginTop:'20px'}}>View More </a>
    </section></div>
  )
}

export default Coffee