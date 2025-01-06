import React from 'react'
import "./home.css"
import Me from "../../assets/avatar-1.svg"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Kent H.</h1>
        <p className="home__education">Software Engineer</p>


        <a href="#contact" className="btn">Hire Me</a>
        <HeaderSocials></HeaderSocials>

        <ScrollDown></ScrollDown>
      </div>

      <Shapes></Shapes>
    </section>
  )
}

export default Home