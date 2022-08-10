import React, { useState } from 'react'
import '../styles.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Register() {
    const [user,setUser] = useState({name:'',email:'',contact:0,password:''})
    const navigate = useNavigate()

    const submitHandler =  async (e) => {
      e.preventDefault()
      const data = {
        'name' : user.name,
        'email': user.email,
        'password' : user.password,
        'role' : 'user',
        'contact' : user.contact  
      }

     try {
      const res = await axios.post('http://localhost:5000/api/v1/auth/register' , data ,{
        headers:{
          'Content-Type': 'application/json'
        }
      })
      localStorage.setItem('name',res.data.name)
      localStorage.setItem('token',res.data.token)
      localStorage.setItem('role',res.data.name)
      localStorage.setItem('userId',res.data.userId) 
      navigate('/user/home')
      console.log(res.data)
     } catch (error) {
      console.log(error.message)
     }
    }


  return (
    <div className="body">
      <div className='form-container'>
        <h2>SignUp</h2>
        <form onSubmit={submitHandler} classname='Form'>
          <div className='form-row'>
            &nbsp;<label htmlFor='Name'>Name</label><br/>
            <input type='text' className='input-text' placeholder="Name" id='Name' name='name'
             value={user.name} onChange={(e)=> setUser(prevState => ({...prevState,name:e.target.value}))} />
          </div>
          
          <div className='form-row'>
          &nbsp;<label htmlFor='Email'>Email</label><br/>
            <input type='email' className='input-text'  placeholder="Email" id='Email' name='email' 
            value={user.email} onChange={(e)=> setUser(prevState => ({...prevState,email:e.target.value}))} />
          </div>
          <div className='form-row'>
          &nbsp;<label htmlFor='contact'>Contact</label><br/>
            <input type='tel' className='input-text'  placeholder="Contact" id='contact' name='contact' 
            value={user.contact} onChange={(e)=> setUser(prevState => ({...prevState,contact:e.target.value}))} />
          </div>
          <div className='form-row'>
          &nbsp;<label htmlFor='password'>Password</label><br/>
            <input type='password' className='input-text'  placeholder="password" id='password' name='password' 
            value={user.password} onChange={(e)=> setUser(prevState => ({...prevState,password:e.target.value}))} />
          </div>
          
          <div className='form-row' id='submit-row'>
            <input type='submit' value='Sign Up' className='submitbtn' />
          </div>
        </form>
        <p id='login-atend'>Already have an account ? <a href='/signin'>Sign In</a></p>

      </div>
    </div>
  )
}

export default Register