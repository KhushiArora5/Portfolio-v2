import React from 'react';
import './About.css';
import me2 from '../../Assets/me 2.png';
import {FaAward} from 'react-icons/fa';
import {VscFiles} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me2} alt="image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>2 Months Internship</small>
            </article>

            <article className="about__card">
              <VscFiles className="about__icon"/>
              <h5>Projects</h5>
              <small>15+ Completed Projects</small>
            </article>
          </div>

          <p>
          A self driven IT expert seeking for the job of 
          MERN Stack Web Developer with extensive knowledge 
          and competence in HTML, CSS, JavaScript and 
          mobile responsive web development and strong talents 
          and aptitude in developing clean and efficient code. 
          Looking to enhance my skills by taking challenging 
          projects and expanding my knowledge.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>      
    </section>
  )
}

export default About;