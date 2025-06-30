import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'

import { Routes, Route } from 'react-router-dom'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useThemeStore } from './store/useThemeStore'

import { Loader } from 'lucide-react'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const {authUser, checkAuth, ischeckingAuth, onlineUsers} = useAuthStore();
  const {theme} = useThemeStore();

  console.log("Online Users:", onlineUsers);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log(authUser);
if(ischeckingAuth && !authUser)
 return (
    <div className = "flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin" />
    </div>
  )

  return (
    <div data-theme={theme} >
      <Navbar />

      <Routes>
        <Route path="/" element={authUser? <HomePage/> : <Navigate to='/login' />}/>
        <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to='/' />}/>
        <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to='/' />}/>
        <Route path='/profile' element={authUser? <ProfilePage/> : <Navigate to='/login' />}/>
        <Route path='/settings' element={<SettingsPage/>}/>
      </Routes>

      <Toaster />
    </div>
  );
};

export default App
