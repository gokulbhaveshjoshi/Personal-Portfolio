import React from 'react'
import image from '../../assets/images/intro.avif';
import './Home.css';

const Home = () => {
  return (
    <div className='container'>
        <div className='left'>
            <h6 className='greeting'>
                Hello there...
            </h6>
            <h1 className='name-heading'>
                Gokul Bhavesh Joshi
            </h1>
            <div className='sub-heading'>
                I am Passionate Developer
            </div>
            <div className='description'>
            The namics of how users interact with interactive elements within a user interface flow chart based on container proportion.
            </div>
            <div className='btn-groups'>
                <button className='btn btn-yellow'>MY WORK</button>
                <button className='btn btn-yellow-shade'>Hire me</button>
            </div>
        </div>
        <div className='right'>
            <img src={image} />
        </div>
    </div>
  )
}

export default Home