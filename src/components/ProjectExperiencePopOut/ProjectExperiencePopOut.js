import React from 'react'
import './ProjectExperiencePopOut.css'
import { AiOutlineClose } from 'react-icons/ai'
import { PROJECT_EXPERIENCE } from '../constants'


function ProjectExperiencePopOut({handleProjectExperienceClick, project}) {
  return (
    <div className='project-experience-popout-container'>
      <div className="exit-project-experience-button-container"><AiOutlineClose className='exit-button' onClick={() => handleProjectExperienceClick('')}/></div>
      <div className="project-experience-popout-title">{project}</div>
      <div className="project-experience-popout-description">{PROJECT_EXPERIENCE[project]["description"]}</div>
    </div>
  )
}

export default ProjectExperiencePopOut
