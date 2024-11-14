import React from 'react'
import Header from '../components/header/Header'
import SkillsLayout from '../components/skills/SkillsLayout'
import ProjectLayout from '../components/Projects/ProjectLayout'
import TestimonialLayout from '../components/Testimonial/TestimonialLayout'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import { ToastContainer } from 'react-toastify'


const HomePage = () => {
  return (
    <>
    <Header />
    <SkillsLayout />
    <ProjectLayout />
    <TestimonialLayout />
    <Contact />
    <Footer />
    <ToastContainer />
    </>
  )
}

export default HomePage