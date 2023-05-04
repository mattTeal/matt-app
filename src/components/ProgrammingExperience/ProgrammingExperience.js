import React from 'react'
import './ProgrammingExperience.css'

function ProgrammingExperience() {
  const EXPERIENCE_INFO = {
    "Python": 70,
    "React.JS": 70,
    "SQL": 68,
    "Vue.JS": 62,
    "C++": 55,
  }


  return (
    <div className='experience-container'>
      <div className='experience-header'>Programming Experience</div>
      <div className="experience-sub-header">"You must unlearn what you have learned" - Yoda</div>
      <div className='experience-info-container'>
        {Object.keys(EXPERIENCE_INFO).map((language, index) => {
          return (
            <div className='experience-info'>
              <div className='programming-language-text'>
                {language}
              </div>
              <div className='valuation-bar'>
                <div 
                  className='valuation-fill'
                  style={{width: `${EXPERIENCE_INFO[language]}%`}}
                />
              </div>
              <div className='measurement-bar'>
                <div className="measurement" style={{width: '0%'}}></div>
                <div className="measurement" style={{width: '30%'}}></div>
                <div className="measurement" style={{width: '30%'}}></div>
                <div className="measurement" style={{width: '40%'}}></div>
              </div>
              <div className='measurement-bar-values' style={{marginTop: '1%'}}>
                <div className="measurement-value" style={{width: '27%'}}>Never heard of it</div>
                <div className="measurement-value" style={{width: '24%'}}>Academic</div>
                <div className="measurement-value" style={{width: '33%'}}>Professional</div>
                <div className="measurement-value" style={{width: '10%'}}>Mastery</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProgrammingExperience