import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Auth/register/Register';
import SignIn from './components/Auth/signin/SignIn';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
    </>
  );
}

export default App;
