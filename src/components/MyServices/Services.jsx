import React from 'react'
import sImg from '../../assets/images/img1.png'

const Services = ({ services }) => {
    return (
        <div className='myService-card'>
            {console.log(services.img)}
            <span ><img className='myService-img' src={services.img} /></span>
            <span className='myService-title'>{services.title}</span>
            <span className='myService-des'>{services.description}</span>
        </div>
    )
}

export default Services