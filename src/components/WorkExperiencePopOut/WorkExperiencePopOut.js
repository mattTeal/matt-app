import React from 'react'
import './WorkExperiencePopOut.css'
import { AiOutlineClose } from 'react-icons/ai'
import { WORK_EXPERIENCE } from '../constants'

function WorkExperiencePopOut({handleWorkExperienceClick, company}) {
  return (
    <div className='work-experience-popout-container'>
      <div className="exit-work-experience-button-container"><AiOutlineClose className='exit-button' onClick={() => handleWorkExperienceClick('')}/></div>
      <div className="work-experience-popout-title">{company}</div>
      <div className="work-experience-popout-position">{WORK_EXPERIENCE[company]["position"]}</div>
      <div className="work-experience-popout-description">{WORK_EXPERIENCE[company]["description"]}</div>
    </div>
  )
}

export default WorkExperiencePopOut
