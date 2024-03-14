import React, { useState } from 'react'
import './Slider.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import string from '../../assets/json/string.json'
import img from '../../assets/images/team-2.jpg'
const slides = [
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

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (


                            <div className='card testimonial-card'>
                                <img className='testimonial-img' src={img} alt='icon' />
                                <div className='testimonial-right'>
                                    <span className='testimonial-msg'>{string.dummy}</span>

                                    <h3 className='testimonial-h'>Gokul Bhavesh Joshi</h3>
                                    <span>President</span>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </section>
    )
}

export default Slider