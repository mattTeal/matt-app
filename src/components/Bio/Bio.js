import React from 'react'
import './Bio.css'

function Bio() {
  return (
    <div className='bio-container'>
      <div className='bio-pic-container'>
        <img src='/a_handsome_young_man.png' alt='a handsome man fr' className='handsome-pic'/>
      </div>
      <div className='bio-info'>
        Hey, I'm Matt Teal. I have been a professional software engineer since January 2022.
        I've worked with major organizations in implementing robust solutions to significant challenges.
        <br></br><br></br>
        blah blah blah blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blah
      </div>
    </div>
  )
}

export default Bio;