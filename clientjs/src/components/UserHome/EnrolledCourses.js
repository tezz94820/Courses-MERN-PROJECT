import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './styles.module.css'
import Course from './Course'

function EnrolledCourses() {
    const [enrolledCourses , setEnrolledCourses] = useState([])
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/v1/courses/user/${userId}`,{
                headers:{
                    'Authorization':`Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            setEnrolledCourses(res.data.courses)

        } catch (error) {
            console.log(error.message)
        }   
    }
    
    useEffect( () => {
        fetchData()
    } ,[])
   
    console.log(enrolledCourses)

  return (
    <div className={styles.allCourses}>
        {enrolledCourses.map( (course) => {
            return <Course key={course._id} title={course.title} id={course._id} desc={course.desc} start_date={course.start_date} end_date={course.end_date}/>
        })}
    </div>
  )
}

export default EnrolledCourses