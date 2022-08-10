import React, { useState } from 'react'
import styles from './styles.module.css'
import axios from 'axios'
function CreateCourse() {

  const [courseContent , setCourseContent] = useState({'title':'','desc':'','start_date':'','end_date':''})

  const submitHandler =  async (e) => {
    e.preventDefault()
    const data = {
      'title' : courseContent.title,
      'desc': courseContent.desc,
      'start_date' : courseContent.start_date,
      'end_date' : courseContent.end_date
    }
    const token = localStorage.getItem('token')
   try {
    const res = await axios.post('http://localhost:5000/api/v1/admin/course' , data ,{
      headers:{
        'Authorization':`Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    console.log(res.data)
   } catch (error) {
    console.log(error.message)
   }
  }

  return (
    <div className={styles.createCourseContainer}>
      <form onSubmit={submitHandler} className={styles.createForm}>
          <div className='form-row'>
            &nbsp;<label htmlFor='title'>Title</label><br/>
            <input type='text' className={styles.inputArea} placeholder="Title" id='title' name='title'
             value={courseContent.title} onChange={(e)=> setCourseContent(prevState => ({...prevState,title:e.target.value}))} />
          </div>
          
          <div className='form-row'>
          &nbsp;<label htmlFor='desc'>Description</label><br/>
            <input type='textarea' className={styles.inputArea}  placeholder="Description" id='desc' name='desc' 
            value={courseContent.desc} onChange={(e)=> setCourseContent(prevState => ({...prevState,desc:e.target.value}))} />
          </div>
          <div className='form-row'>
          &nbsp;<label htmlFor='start_date'>Start Date</label><br/>
            <input type='date' className={styles.inputDate}  id='start_date' name='start_date' 
            value={courseContent.start_date} onChange={(e)=> setCourseContent(prevState => ({...prevState,start_date:e.target.value}))} />
          </div>
          <div className='form-row'>
          &nbsp;<label htmlFor='end_date'>End Date</label><br/>
            <input type='date' className={styles.inputDate}  id='end_date' name='end_date' 
            value={courseContent.end_date} onChange={(e)=> setCourseContent(prevState => ({...prevState,end_date:e.target.value}))} />
          </div>
          
          <div className='form-row' id='submit-row'>
            <input type='submit' value='Create' className='submitbtn' />
          </div>
      </form>
    </div>
  )
}

export default CreateCourse