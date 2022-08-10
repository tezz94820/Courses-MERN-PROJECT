import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'

function UserNavbar({activeLink , setActiveLink}) {
    const navigate = useNavigate()

    const logOutHandler = () => {
        localStorage.clear()
        localStorage.removeItem('name')
        navigate('/')
    }

    const name = localStorage.getItem('name')

  return (
    <>
      <nav className={styles.navbar}>
          <div className={styles.leftNavside}>
            <h1><a href='/user/home'>Courses</a></h1>
          </div>
          <div className={styles.middleNavside}>
            <button onClick={() => setActiveLink('enrolledcourses')} className={styles.enrollbtn}>Enrolled Courses</button>
          </div>
          <div className={styles.rightNavside}>
            <ul className={styles.navList}>
                <li className={styles.name}>Hello {name}</li>
                <li><button className={styles.logOutBtn} onClick={logOutHandler}>Log Out</button></li>
            </ul>
          </div>
      </nav>
    </>
  )
}

export default UserNavbar