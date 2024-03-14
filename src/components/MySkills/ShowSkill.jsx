import React from 'react'
import SkillTag from './SkillTag'

const ShowSkill = ({ skill }) => {
    return (
        <div>
            <div className='skill-name'>{skill.name}</div>
            {skill.values.map((value, valueIndex) => (
                <SkillTag key={valueIndex} value={value} />
            ))}
        </div>
    )
}

export default ShowSkill