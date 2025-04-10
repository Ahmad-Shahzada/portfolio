import React from 'react'
import Hero from './landingpage/components/Hero'
import AboutSection from './landingpage/components/About'
import Skills from './landingpage/components/Skill'
import Projects from './landingpage/components/Project'
import ContactUs from './landingpage/components/Contact-us'

const Home = () => {
  return (
    <div>
        <Hero />
        <AboutSection/>
        <Skills/>
        <Projects/>
        <ContactUs/>
    </div>
  )
}

export default Home
