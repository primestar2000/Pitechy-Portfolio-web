import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import SkillsLayout from './components/skills/SkillsLayout'
import ProjectLayout from './components/Projects/ProjectLayout'

function App() {


  return (
    <>
      <div className='  dark:bg-slate-900'>
        <div className="flex justify-center ">
          <div className="max-w-screen-xl w-full">
                <Header />
                <SkillsLayout />
                <ProjectLayout />
          </div>
      </div>
      </div>
    </>
  )
}

export default App
