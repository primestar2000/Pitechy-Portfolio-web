import { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app';
import './App.css'
import Header from './components/header/Header'
import SkillsLayout from './components/skills/SkillsLayout'
import ProjectLayout from './components/Projects/ProjectLayout'
import TestimonialLayout from './components/Testimonial/TestimonialLayout'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/Auth/login';
import { AppContext } from './context/appContext';
import SplashScreen from './components/splash-screen/SplashScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
const [darkMode, setDarkMode] =  useState(false);
const [loading, setLoading] = useState(true);

useEffect(()=>{
  setLoading(false);
},[])
if (loading) {
  return(
    <SplashScreen />
  )
}
  return (
    <>
    <AppContext.Provider value={{darkMode, setDarkMode}}>
    <Router>
    
      <div className={` ${darkMode && 'dark'} dark:bg-slate-900`}>
        <div className="flex justify-center ">
          <div className="max-w-screen-xl w-full">
            <Routes>
              <Route path='/' element={
                <>
                  <Header />
                  <SkillsLayout />
                  <ProjectLayout />
                  <TestimonialLayout />
                  <Contact />
                  <Footer />
                  <ToastContainer />
                </>
              } />
              <Route path='/login' Component={LoginPage} />
            </Routes>
          </div>
        </div>
      </div>
      
    </Router>
    </AppContext.Provider>
    </>
  )
}

export default App
