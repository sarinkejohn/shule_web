import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import TeacherPage from './TeacherPage';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import TeacherActivity from "./pages/TeacherActivity"
import TeacherOnAir from "./pages/TeacherOnAir"

function App() {
  return (
    <div>

      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path="/forgetpassword" element={<ForgotPassword/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<UpdateProfile/>} />
          <Route path='/activity' element={  <TeacherActivity/> } />
          <Route path='/teacherpage' element={  <TeacherPage/> } />
          <Route path='/onair' element={  <TeacherOnAir/> } />
          <Route  path='/account' element={ <Account/> }/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
