import React from 'react'
import { useNavigate } from 'react-router-dom'
import  './styles.css'

function Home() {
  const navigate = useNavigate()
  return (
    <div className="home-container">
      <div className='section' id='left-section'>
        <button className='btn' onClick={() => navigate('/register')}>Register</button>
        <button className='btn' onClick={() => navigate('/signin')}>Sign In</button>
      </div>
      <div className='section' id='right-section'>
        <h1>Welcome to the Courses MarketPlace</h1>
        <h2>Sign In to get enrolled in the courses</h2>
      </div>
    </div>
  )
}

export default Home