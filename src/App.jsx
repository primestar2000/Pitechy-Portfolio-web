import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import SkillsLayout from './components/skills/SkillsLayout'
import ProjectLayout from './components/Projects/ProjectLayout'

function App() {


  return (
    <>
    <div className="flex justify-center">
      <div className="max-w-[1920px] w-full">
            <Header />
            <SkillsLayout />
            <ProjectLayout />
      </div>
    </div>
    </>
  )
}

export default App
