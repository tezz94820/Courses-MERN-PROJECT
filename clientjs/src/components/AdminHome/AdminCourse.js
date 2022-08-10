import axios from 'axios'
import React,{useState} from 'react'
import styles from './styles.module.css'

function AdminCourse({id,title,desc,start_date,end_date}) {
  const [updateVisible,setUpdateVisible] = useState(false)
  const [updateContent,setUpdateContent] = useState({'title':'','desc':'','start_date':'','end_date':''})
  
  const updateHandler = async (courseId) => {
    const data = {
      'title' : updateContent.title,
      'desc': updateContent.desc,
      'start_date' : updateContent.start_date,
      'end_date' : updateContent.end_date
    }
    const token = localStorage.getItem('token')

    try {
      const res = await axios.patch(`http://localhost:5000/api/v1/admin/course/${courseId}` , data ,{
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

const deleteHandler = async (courseId) => {
  try {
    const res = await axios.delete(`http://localhost:5000/api/v1/admin/course/${courseId}` , {
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
      <div>
        <h3>{title.toUpperCase()}</h3>
        <span>Description :- {desc}</span>
        <div>Start Date :- {start_date.slice(0,10)}</div>
        <div>End Date :- {end_date.slice(0,10)}</div>
        <button onClick={() => deleteHandler(id)}>Delete Course</button>
        <button onClick={() => setUpdateVisible(!updateVisible)}>Update Course</button>
      </div>


      
         {updateVisible? (<div className={styles.updateContainer}>
          <form onSubmit={() => updateHandler(id)} className={styles.createForm}>
              <div className='form-row'>
                &nbsp;<label htmlFor='title' className={styles.updateFormlabel}>Title</label><br/>
                <input type='text' className={styles.inputArea} placeholder="Title" id='title' name='title'
                value={updateContent.title} onChange={(e)=> setUpdateContent(prevState => ({...prevState,title:e.target.value}))} />
              </div>
              
              <div className='form-row'>
              &nbsp;<label htmlFor='desc' className={styles.updateFormlabel}>Description</label><br/>
                <input type='textarea' className={styles.inputArea}  placeholder="Description" id='desc' name='desc' 
                value={updateContent.desc} onChange={(e)=> setUpdateContent(prevState => ({...prevState,desc:e.target.value}))} />
              </div>
              <div className='form-row'>
              &nbsp;<label htmlFor='start_date' className={styles.updateFormlabel}>Start Date</label><br/>
                <input type='date' className={styles.inputDate}  id='start_date' name='start_date' 
                value={updateContent.start_date} onChange={(e)=> setUpdateContent(prevState => ({...prevState,start_date:e.target.value}))} />
              </div>
              <div className='form-row'>
              &nbsp;<label htmlFor='end_date' className={styles.updateFormlabel}>End Date</label><br/>
                <input type='date' className={styles.inputDate}  id='end_date' name='end_date' 
                value={updateContent.end_date} onChange={(e)=> setUpdateContent(prevState => ({...prevState,end_date:e.target.value}))} />
              </div>
              
              <div className='form-row' id='submit-row'>
                <input type='submit' value='Update' className='submitbtn' />
              </div>
          </form>
          </div>):''}
        </div>
      
  )
}

export default AdminCourse