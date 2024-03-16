import { useState } from 'react'
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

function App() {


  return (
    <>
    <Router>
    
      <div className='  dark:bg-slate-900'>
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
                </>
              } />
              <Route path='/login' Component={LoginPage} />
            </Routes>
          </div>
        </div>
      </div>
      
    </Router>
    </>
  )
}

export default App
