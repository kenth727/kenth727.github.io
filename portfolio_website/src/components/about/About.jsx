import React from "react";
import "./about.css";
import Image from "../../assets/kent_cropped.png";
import AboutBox from "./AboutBox";
import Resume from "../../assets/resume.pdf"

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hi my name is Kent, and I am a software engineer. 
            </p>
            <p className="about__description">
              One of my hobbies is weightlifting, as I find it benefits me both physically and mentally.
            </p>
            <p className="about__description">
              Motto: Goals can be achieved by taking one step at a time.
            </p>

            <a href={Resume} download="Kent_H_Resume.pdf" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skill__data">
              <div className="skills__titles">
                <h3 className="skills__name">Love for Coffee</h3>
                <span className="skills__number">☕</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage coffee"></span>
              </div>
            </div>

            <div className="skill__data">
              <div className="skills__titles">
                <h3 className="skills__name">Exploring new foods</h3>
                <span className="skills__number">🍔</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage food"></span>
              </div>
            </div>

            <div className="skill__data">
              <div className="skills__titles">
                <h3 className="skills__name">Gaming</h3>
                <span className="skills__number">👾</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage gaming"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <AboutBox></AboutBox> */}
    </section>
  );
};

export default About;
