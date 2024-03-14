import React from 'react'
import data from '../../assets/json/skills.json'
import ShowSkill from './ShowSkill'
import './MySkills.css';

const MySkills = () => {
  return (
    <div className='skills-container'>
        <h1>MY SKILLS</h1>
        <span>A Lead UX & UI Designer BASED in INDIA</span>

        <div className='skills'>
            <div>
            {data.skills.map(( skill) => (
                <div>
                    <ShowSkill skill={skill}/>
                </div>
                
            ))}
        </div>
        <div></div>
        </div>
    </div>
  )
}

export default MySkills