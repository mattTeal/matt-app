import React, { useState } from 'react'
import { Bio, BioQuiz, PastProjects, ProgrammingExperience, ProjectExperiencePopOut, RockPaperScissors, WorkExperience, WorkExperiencePopOut } from '../../components'
import './HomePage.css'

function HomePage() {
  const [workExperienceId, setWorkExperienceId] = useState('');
  const [projectExperienceId, setProjectExperienceId] = useState('');

  const handleWorkExperienceClick = (company) => {
    setProjectExperienceId('')
    setWorkExperienceId(company);
  }

  const handleProjectExperienceClick = (project) => {
    setWorkExperienceId('');
    setProjectExperienceId(project)
  }

  return (
    <div className='homepage'>
      <div className='bio-parent-container'>
        <Bio/>
      </div>
      <div className='work-experience-parent-container'>
        <WorkExperience handleWorkExperienceClick={handleWorkExperienceClick}/>
      </div>
      <div className='work-experience-parent-container'>
        <PastProjects handleProjectExperienceClick={handleProjectExperienceClick}/>
      </div>
      <div className='experience-parent-container'>
        <ProgrammingExperience/>
      </div>
      <div className='bio-quiz-parent-container'>
        <BioQuiz/>
      </div>
      <div className='game-parent-container'>
        <RockPaperScissors/>
      </div>
      {(workExperienceId.length > 0 || projectExperienceId.length) > 0 &&
        <div className='disabled-screen'/>
      }
      {workExperienceId.length > 0 &&
        <div className="work-experience-popout-parent">
          <WorkExperiencePopOut handleWorkExperienceClick={handleWorkExperienceClick} company={workExperienceId}/>
        </div>
      }
      {projectExperienceId.length > 0 &&
        <div className="project-experience-popout-parent">
          <ProjectExperiencePopOut handleProjectExperienceClick={handleProjectExperienceClick} project={projectExperienceId}/>
        </div>
      }
    </div>
  )
}

export default HomePage