import React from 'react'
import { Bio, Experience } from '../../components'
import './HomePage.css'

function HomePage() {
  return (
    <div className='homepage'>
      <div className='bio-parent-container'>
        <Bio/>
      </div>
      <div className='experience-parent-container'>
        <Experience/>
      </div>
    </div>
  )
}

export default HomePage