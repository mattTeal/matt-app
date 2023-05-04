import React from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../constants'


function WorkExperience({ handleWorkExperienceClick }) {
  return (
    <div className='work-experience-container'>
      <div className="work-experience-header"> Work Experience </div>
      <div className="work-experience-sub-header"> Most recent to past </div>
      <div className="work-cards-container">
        {Object.keys(WORK_EXPERIENCE).map((company, index) => {
          return (
            <div className='work-card-container' onClick={() => handleWorkExperienceClick(company)}>
              <div className="work-card-title">{company}</div>
              <div className="work-card-position">{WORK_EXPERIENCE[company]["position"]}</div>
              <div className="work-card-description">{WORK_EXPERIENCE[company]["description"]}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WorkExperience