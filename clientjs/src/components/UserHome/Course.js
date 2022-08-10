import axios from 'axios'
import React from 'react'
import styles from './styles.module.css'

function Course({id,title,desc,start_date,end_date}) {

const enrollHandler = async (courseId) => {
  try {
    const res = await axios(`http://localhost:5000/api/v1/courses/enroll/${courseId}` , {
      headers:{
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
    console.log(res)
  } catch (error) {
    console.log(error.message)
  }
} 
  
  desc=desc[0].toUpperCase()+desc.slice(1,)
  return (
    <div className={styles.courseContainer}>
      <h3>{title.toUpperCase()}</h3>
      <span>Description :- {desc}</span>
      <div>Start Date :- {start_date.slice(0,10)}</div>
      <div>End Date :- {end_date.slice(0,10)}</div>
      <button onClick={() => enrollHandler(id)}>Enroll Now</button>
    </div>
  )
}

export default Course