import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='hero'>
      <div className="container">
        <div className="title">
          <h1>Let's</h1>
           <h1>Get</h1>
            <h1>Moving</h1>
        </div>
        <div className="subtitle">
          <p>YOUR JOURNEY TO FITNESS BEGINS HERE</p>
        <p>UNLEASH YOUR POTENTIAL</p>
        </div>
        <div className="buttons">
        <Link to="/pricing"><button> Discover your plan</button></Link> 
        </div>
      </div>
    </section>
  )
}

export default Hero
