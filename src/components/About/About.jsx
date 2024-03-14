import React from 'react'
import image from '../../assets/images/intro.avif';
import './About.css';
const About = () => {
  return (
    <div className='about-main'>
        <h1>ABOUT ME</h1>
        <span>A Software Developer Based in INDIA</span>
        <div className='about-container'>
            <div className='about-left'>
                <img src={image} />
            </div>
            <div className='about-right'>
                <h3>I'M Gokul Bhavesh Joshi</h3>
                <span>A lead UI & UX designer based in India</span>
                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio</p>
                
                <table >
                    <tr>
                        <th>Birthday</th>
                        <td className='about-tr-value'>23.Dec.1998</td>
                        <th className='about-tr-value'>E-mail</th>
                        <td className='about-tr-value'>info@gokulbhavesh.com</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td className='about-tr-value'>24 years</td>
                        <th className='about-tr-value'>Phone</th>
                        <td className='about-tr-value'>+91-8976453201</td>
                    </tr>
                    <tr>
                        <th>Residence</th>
                        <td className='about-tr-value'>India</td>
                        <th className='about-tr-value'>Skype</th>
                        <td className='about-tr-value'>skype.404</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td className='about-tr-value'>Jawad, MP, India</td>
                        <th className='about-tr-value'>Freelance</th>
                        <td className='about-tr-value'>Avialable</td>
                    </tr>
                </table>
                <button className='btn btn-yellow about-btn'>DOWNLOAD CV</button>
            </div>
        </div>
    </div>
  )
}

export default About