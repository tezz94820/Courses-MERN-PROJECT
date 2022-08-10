import React, { useState } from 'react'
import axios from 'axios'
import '../styles.css'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const [user , setUser ] = useState({email:'',password:'',role:''})
  const navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault()
    const data = {
      'email': user.email,
      'password':user.password,
      'role':user.role
    }

    

    try {
      const res = await axios.post('http://localhost:5000/api/v1/auth/login',data,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      localStorage.setItem('name',res.data.name)
      localStorage.setItem('token',res.data.token)
      localStorage.setItem('role',res.data.name)
      localStorage.setItem('userId',res.data.userId) 

      if(user.role==='user'){
        navigate('/user/home')
      }
      else if(user.role==='admin'){
        navigate('/admin/home')
      }
      console.log(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="body">
      <div className='form-container'>
        <h2>Sign In</h2>
        <form onSubmit={submitHandler} className='Form'>
          <div className='form-row'>
          &nbsp;<label htmlFor='Email'>Email</label><br/>
            <input type='email' className='input-text'  placeholder="Email" id='Email' required
            value={user.email} onChange={e => setUser(prevState => ({...prevState , email:e.target.value}))}/>
          </div>
          <div className='form-row'>
          &nbsp;<label htmlFor='password'>Password</label><br/>
            <input type='password' className='input-text'  placeholder="password" id='password' required
            value={user.password} onChange={e => setUser(prevState => ({...prevState , password:e.target.value}))}/>
          </div>
          <div className='form-row'>
          &nbsp;<label htmlFor='role'>Role</label><br/>
            <input type='radio'   id='admin' name='role' 
            value='admin' onChange={(e)=> setUser(prevState => ({...prevState,role:e.target.value}))} />
            <label htmlFor='admin'>Admin</label>&nbsp;
            <input type='radio'   id='user' name='role' 
            value='user' onChange={(e)=> setUser(prevState => ({...prevState,role:e.target.value}))} />
            <label htmlFor='user'>User</label>&nbsp;
          </div>
          <div className='form-row' id='submit-row'>
            <input type='submit' value='Sign In' className='submitbtn' />
          </div>
        </form>
        <p id='login-atend'>Dont have an account ? <a href='/register'>Sign Up</a></p>
      </div>
    </div>
  )
}

export default SignIn