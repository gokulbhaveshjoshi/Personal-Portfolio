import React from 'react'

const PortfolioCard = ({ data }) => {
    return (
        <div className='portfolio-card' >
            <img className='portfolio-image' src={data.image} />
            <div class="portfolio-info">
                <h3>
                    {data.title}
                </h3>
                <span>{data.description}</span>
            </div>

        </div>
    )
}

export default PortfolioCard