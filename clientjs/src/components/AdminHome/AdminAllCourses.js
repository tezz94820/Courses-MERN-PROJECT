import React, { useEffect, useState } from 'react'
import AdminCourse from './AdminCourse'
import axios from 'axios'
import styles from './styles.module.css'




function AdminAllCourses() {
    const [allCourses , setAllCourses] = useState([])
    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/v1/courses/',{
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
            // await setAllCourses(res.data.courses)
            setAllCourses(res.data.courses)
        } catch (error) {
            console.log(error.message)
        }   
    }
    
    useEffect( () => {
        fetchData()
    } ,[])
   
    console.log(allCourses)
  return (
    <div className={styles.allCourses}>
        {allCourses.map( (course) => {
            return <AdminCourse key={course._id} title={course.title} id={course._id} desc={course.desc} start_date={course.start_date} end_date={course.end_date}/>
        })}
    </div>
  )
}

export default AdminAllCourses