import React,{useState} from 'react'
import AdminAllCourses from './AdminAllCourses'
import AdminNavbar from './AdminNavbar'
import CreateCourse from './CreateCourse'
import GetAllUsers from './GetAllUsers'
import styles from './styles.module.css'
import NotFound from '../NotFound'
function AdminHome() {
  const [activeLink , setActiveLink] = useState('allcourses')
  return (
    <div className={styles.adminHomeContainer}>
      <AdminNavbar activeLink={activeLink} setActiveLink={setActiveLink}/>
      {activeLink==='allcourses'?<AdminAllCourses/>:activeLink==='createcourse'?<CreateCourse/>:activeLink==='getallusers'?<GetAllUsers/>:<NotFound/>}
    </div>
  )
}

export default AdminHome