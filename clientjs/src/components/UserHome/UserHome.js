import React, { useState } from 'react'
import UserNavbar from './UserNavbar'
import styles from './styles.module.css'
import AllCourses from './AllCourses'
import EnrolledCourses from './EnrolledCourses'


function UserHome() {
  const [activeLink , setActiveLink] = useState('allcourses')
  return (
    <div className={styles.UserHomeContainer}>
      <UserNavbar activeLink={activeLink} setActiveLink={setActiveLink}/>
      {(activeLink==='allcourses')?<AllCourses/>:<EnrolledCourses/>}
    </div>
  )
}

export default UserHome