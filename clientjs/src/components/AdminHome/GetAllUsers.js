import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import axios from 'axios'
import User from './User'


function GetAllUsers() {

  const [allUsers,setAllUsers] = useState([])

  const fetchData =  async () => {

    const token = localStorage.getItem('token')
   try {
    const res = await axios.get('http://localhost:5000/api/v1/admin/user' , {
      headers:{
        'Authorization':`Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      setAllUsers(res.data.user)
    // console.log(res.data.user)
   } catch (error) {
    console.log(error.message)
   }
  }
console.log(allUsers)
    useEffect( () => {
      fetchData()
    } ,[])


  return (
    <div className={styles.allUsers}>
      {allUsers.map( user =>{
        return <User key={user._id} id={user._id} name={user.name} contact={user.contact} email={user.email}/>

      } )}
    </div>
  )
}

export default GetAllUsers