import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Auth/register/Register';
import SignIn from './components/Auth/signin/SignIn';
import Home from './components/Home/Home';
import NotFound from './components/NotFound';
import {authUser,authAdmin} from './authUser.js'
import AdminHome from './components/AdminHome/AdminHome';
import UserHome from './components/UserHome/UserHome';


function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/user/home'  element={authUser?<UserHome/>:<NotFound/>} />
        <Route path='/admin/home'  element={authAdmin?<AdminHome/>:<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
