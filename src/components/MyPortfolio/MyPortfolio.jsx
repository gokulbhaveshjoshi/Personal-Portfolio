import React from 'react'
import string from '../../assets/json/string.json'
import cloud from '../../assets/images/intro.avif'
import './MyPortfolio.css'
import PortfolioCard from './PortfolioCard'

const MyPortfolio = () => {
    const data = [
        {
            "title": "Salesforce Developer",
            "description": "Yes I am Salesforce",
            "image": cloud
        },
        {
            "title": "Salesforce Developer",
            "description": "Yes I am Salesforce",
            "image": cloud
        },
        {
            "title": "Salesforce Developer",
            "description": "Yes I am Salesforce",
            "image": cloud
        }
    ]
    return (
        <div className='portfolio-container'>
            <h1>{string['portfolio-title']}</h1>
            <hr />
            <span>{string.tagline}</span>

            <div className='myportfolio-section'>
                {data.map((value, index) => (
                    <PortfolioCard data={value} key={index} />
                ))}

            </div>
        </div>
    )
}

export default MyPortfolio