import React, { useState } from 'react'
import styles from './styles.module.css'
import axios from 'axios'

function User({name,contact,email,id}) {

    const [courseVisible,setCourseVisible] = useState(false)
    const [courses,setCourses] = useState([])

    const userEnrollhandler = async (userId) => {
        setCourseVisible(!courseVisible)
        const token = localStorage.getItem('token')
        try {
            const res = await axios.get(`http://localhost:5000/api/v1/admin/user/${userId}` , {
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json'
            }
         })
            // console.log(res.data[0].title)
         setCourses(res.data.courses)
        } catch (error) {
         console.log(error.message)
        }
    }


console.log(courses)
  return (
    <div className={styles.userContainer}>
      <div>
        <h3>Name :-{name.toUpperCase()}</h3>
        <h3>contact :- {contact}</h3>
        <h3>email :- {email}</h3>
        <button onClick={() => userEnrollhandler(id)}>Courses Enrolled</button>
      </div>


      
         {courseVisible? (<div className={styles.enrolled}>
          <h3>Enrolled Courses</h3>
            {courses.map( course => {
                return <h5 key={course.id}>{course.title}</h5>
            })}
          </div>):''}
        </div>
  )
}
export default User