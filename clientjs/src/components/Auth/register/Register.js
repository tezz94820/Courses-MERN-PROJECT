import React, { useState } from 'react'
import styles from './styles.css'
function Register() {
    const [user,setUser] = useState({})
  return (
    <div className="register-container">
        <h4>Register</h4>
        <form>
            <label htmlFor='Name'>Name</label>
            <input type='text' placeholder="Name"/><br/>
            <label htmlFor='Email'>Email</label>
            <input type='email' placeholder="Email"/><br/>
            <label htmlFor='contact'>Contact</label>
            <input type='tel' placeholder="Contact"/><br/>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder="password"/><br/>
            <input type='radio' value='admin' name='role' id='admin'/>
            <label htmlFor='admin'>Admin</label>&nbsp;
            <input type='radio' value='user' name='role' id='user'/>
            <label htmlFor='user'>User</label><br/>
            <input type='submit' value='submit' />
        </form>
    </div>
  )
}

export default Register