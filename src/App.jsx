import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import SkillsLayout from './components/skills/SkillsLayout'
import ProjectLayout from './components/Projects/ProjectLayout'
import TestimonialLayout from './components/Testimonial/TestimonialLayout'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {


  return (
    <>
      <div className='  dark:bg-slate-900'>
        <div className="flex justify-center ">
          <div className="max-w-screen-xl w-full">
                <Header />
                <SkillsLayout />
                <ProjectLayout />
                <TestimonialLayout />
                <Contact />
                <Footer />
          </div>
      </div>
      </div>
    </>
  )
}

export default App
