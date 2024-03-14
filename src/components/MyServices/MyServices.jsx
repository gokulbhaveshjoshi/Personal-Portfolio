import React from 'react'
import sImg  from '../../assets/images/img1.png'
import cloud  from '../../assets/images/cloud.png'
import './MyServices.css'
import Services from './Services'

const MyServices = () => {
  const data = [
    {
      "title": "Web development",
      "img": sImg,
      "description": "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    },
    {
      "title": "Web development",
      "img": cloud,
      "description": "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    },
    {
      "title": "Web development",
      "img": sImg,
      "description": "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    },
    {
      "title": "Web development",
      "img": sImg,
      "description": "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    },
    {
      "title": "Web development",
      "img": sImg,
      "description": "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    },
    {
      "title": "Web development",
      "img": sImg,
      "description": "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    }
  ]
  return (
    <div className='myService'>
      <h1>My Services</h1>
      <span>A Software Developer Based in INDIA</span>

      <div className='myService-section'>
        {data.map((service, index) => (
          <Services key={index} services={service} />
        ))}
      </div>
    </div>
  )
}

export default MyServices