import React from 'react';
import './Exp.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Exp = () => {
  return (
    <section id="exp">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      
      <div className="container exp__container">
        <div className="exp__frontend">
          <h3>FrontEnd Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon"/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon"/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/*End of Frontend*/}
        <div className="exp__backend">
        <h3>BackEnd Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon"/>
              <div>
                <h4>MySql</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon"/>
              <div>
              <h4>Node.Js</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon"/>
              <div>
                <h4>Express</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Exp;