import React from 'react'
import styles from './styles.module.css'
import {useNavigate} from 'react-router-dom'
function AdminNavbar({activeLink , setActiveLink}) {

  const name = localStorage.getItem('name')
  const navigate = useNavigate()

  const logOutHandler = () => {
    localStorage.clear()
    localStorage.removeItem('name')
    navigate('/')
}

  return (
    <div className={styles.navbar}>
      <div className={styles.leftNavside}>
            <button onClick={() => setActiveLink('allcourses')} className={styles.leftNavsideBtn}>courses</button>
            <button onClick={() => setActiveLink('createcourse')} className={styles.leftNavsideBtn}>Create Course</button>
            <button onClick={() => setActiveLink('getallusers')} className={styles.leftNavsideBtn}>Get all Users</button>
      </div>
      <div className={styles.rightNavside}>
            <ul className={styles.navList}>
                <li className={styles.name}>Hello {name}</li>
                <li><button className={styles.logOutBtn} onClick={logOutHandler}>Log Out</button></li>
            </ul>
      </div>
    </div>
  )
}

export default AdminNavbar