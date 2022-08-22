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
import TeacherTalk from "./pages/TeacherTalk"
import TeacherOnAir from "./pages/TeacherOnAir"
import OnAirView from './pages/OnAirView';
import PlayView from './pages/PlayView';

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
          <Route path='/thetalk/' element={  <TeacherTalk/> } />
          <Route path='/onairview/:id' element={  <OnAirView/> } />
          <Route path='/playview/:vid' element={  <PlayView/> } />
          <Route  path='/account' element={ <Account/> }/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
