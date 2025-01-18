import React from 'react'
import "./home.css"
import Me from "../../assets/Kent.svg"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'
import Resume from "../../assets/resume.pdf"

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Kent Huang</h1>
        <p className="home__education">Software Engineer</p>

        <div className="home__contact">
          {/* <a href="#contact" className="btn">Hire Me</a> */}
          <a href={Resume} download="Kent_H_Resume.pdf" className="btn">Download CV</a>
        </div>

        <HeaderSocials></HeaderSocials>
        <ScrollDown></ScrollDown>
      </div>

      <Shapes></Shapes>
    </section>
  )
}

export default Home