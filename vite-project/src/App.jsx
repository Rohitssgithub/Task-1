import React, { useState, Suspense } from 'react';
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
const MyHome = React.lazy(() => import('./Pages/Home'));
import FormValidation from './FormValidation/FormValidation';
import SiginInForm from './FormValidation/SiginInForm';
import Todo from './Todo/Todo';
import CounterClock from './Components/CounterClock/CounterClock';
import Crud from './Formik&Yup/Crud';
import DisplayData from './Formik&Yup/DisplayData';
import UseMemo from './Components/UseMemo/UseMemo';
import UseCallBack from './Components/UseMemo/UseCallBack';

const App = () => {
  let [user, SetUser] = useState(false)
  return (
    <>
      {/* <StopWatch /> */}
      {/* <CounterClock></CounterClock> */}
      {/* <Conditional/> */}
      {/* <LoginForm></LoginForm> */}
      {/* <Form></Form> */}
      {/* <FormValidation></FormValidation> */}
      {/* <SiginInForm /> */}
      {/* <Todo></Todo> */}
      {/* <Crud></Crud> */}
      {/* <UseMemo /> */}
      <UseCallBack />

      {/* <Router>
        <NavBar user={user}></NavBar>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={
              <ProtectedRoute user={user}>
                <MyHome />
              </ProtectedRoute>
            }>
            </Route>
            <Route path='/login' element={<Login setuser={SetUser} user={user} />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Suspense>
      </Router> */}

      {/* <Router>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/updateuser/:id' element={<UpdateUser />} />
          <Route path='/createUser' element={<CreateUser />} />
        </Routes>
      </Router> */}
    </>
  )
}

export default App

