import React from 'react'
import './PastProjects.css'
import { PROJECT_EXPERIENCE } from '../constants'


function PastProjects({ handleProjectExperienceClick }) {
  return (
    <div className='project-experience-container'>
      <div className="project-experience-header"> Project Experience </div>
      <div className="project-experience-sub-header"> Most recent to past </div>
      <div className="project-cards-container">
        {Object.keys(PROJECT_EXPERIENCE).map((project, index) => {
          return (
            <div className='project-card-container' onClick={() => handleProjectExperienceClick(project)}>
              <div className="project-card-title">{project}</div>
              <div className="project-card-description">{PROJECT_EXPERIENCE[project]["description"]}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PastProjects