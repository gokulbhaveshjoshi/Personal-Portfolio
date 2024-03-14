import React from 'react'
import string from '../../assets/json/string.json'
import img from '../../assets/images/team-2.jpg'
import './Testimonial.css'
import Slider from '../Slider/Slider'

const Testimonial = () => {
  const collection = [ 
    { 
        label: "First Picture", 
        imgPath: 
            "https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png", 
    }, 
    { 
        label: "Second Picture", 
        imgPath: 
            "https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png", 
    }, 
    { 
        label: "Third Picture", 
        imgPath: 
            "https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png", 
    }, 
]; 
  return (
    <div className='testimonial'>
        <h1>{string['testimonal-title']}</h1>
        <hr />
        <span>{string.tagline}</span>

        <div className='testimonal-section'>
        <Slider />
            
            
        </div>
    </div>
  )
}

export default Testimonial