import React from 'react'
import {Routes, Route} from 'react-router-dom';
import LandingPage from '../components/Landingpage';
import ProfilePage from '../components/Profilepage';

// Routes
const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/profile/:userId" element={<ProfilePage></ProfilePage>} />
    </Routes>
  )
}

export default Allroutes