import React, { useState } from 'react';
import './App.css'
import StopWatch from './Components/StopWatch/StopWatch';
import Counter from './Components/CounterClock/Counter';
import Conditional from './Components/ConditionalRender/Conditional';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import NavBar from './Components/Navbar/NavBar';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Form from './Components/Form/Form';
import LoginForm from './Components/LoginForm.jsx/LoginForm';
import User from './Crud/user';
import UpdateUser from './Crud/UpdateUser';
import CreateUser from './Crud/CreateUser';

const App = () => {
  let [user, SetUser] = useState(false)
  return (
    <>
      {/* <StopWatch /> */}
      {/* <Counter /> */}
      {/* <Conditional/> */}
      {/* <LoginForm></LoginForm> */}
      {/* <Form></Form> */}

      {/* <Router>
        <NavBar user={user}></NavBar>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }>
          </Route>
          <Route path='/login' element={<Login setuser={SetUser} user={user} />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router> */}

      <Router>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/updateuser/:id' element={<UpdateUser />} />
          <Route path='/createUser' element={<CreateUser />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

