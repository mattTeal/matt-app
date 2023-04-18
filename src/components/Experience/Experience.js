import React from 'react'
import './Experience.css'

function Experience() {
  const EXPERIENCE_INFO = {
    "Python": 70,
    "React.JS": 70,
    "SQL": 65,
    "Vue.JS": 50,
    "C++": 40,
  }


  return (
    <div className='experience-container'>
      <div className='experience-header'>Programming Experience</div>
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experience