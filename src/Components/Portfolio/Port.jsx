import React from 'react';
import './Port.css';
import IMG1 from '../../Assets/1.jpg';
import IMG2 from '../../Assets/2.jpg';
import IMG3 from '../../Assets/3.jpg';
import IMG4 from '../../Assets/4.jpg';
import IMG5 from '../../Assets/5.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'FLIGHT BOOKING SYSTEM YATRI.COM',
    github: 'https://github.com/KhushiArora5/Doosra-College/tree/main/Flight-Booking',
    demo: 'https://chimerical-pasca-8e29be.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'COFFEE ROOSTERS CLONE',
    github: 'https://github.com/KhushiArora5/CoffeeRoaster',
    demo: 'https://resilient-cranachan-9e61cc.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'TIC TAC TOE',
    github: 'https://github.com/KhushiArora5/Tic-Tac-Toe',
    demo: 'https://steady-kashata-47d6ca.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'E-COMMERCE SWIFT',
    github: 'https://github.com/KhushiArora5/e-commerce',
    demo: 'https://superb-capybara-6f4ee8.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'SALON WEBSITE',
    github: 'https://github.com/KhushiArora5/Salon-Website',
    demo: 'https://cool-truffle-7df4fd.netlify.app/'
  }

]

const Port = () => {
  return (
    <section id="port">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container port__container">
        {/* <article className="port__item">
          <div className="port__item-image">
            <img src={IMG1} alt="1" />
          </div>
          <h3>FLIGHT BOOKING SYSTEM YATRI.COM</h3>
          <div className="port__item-cta">
            <a href="https://github.com/KhushiArora5/Doosra-College/tree/main/Flight-Booking" className="btn">GitHub</a>
            <a href="https://chimerical-pasca-8e29be.netlify.app/" className="btn btn-primary">Live Demo</a>
          </div>
        </article>

        <article className="port__item">
          <div className="port__item-image">
            <img src={IMG2} alt="2" />
          </div>
          <h3>COFFEE ROOSTERS CLONE</h3>
          <div className="port__item-cta">
            <a href="https://github.com/KhushiArora5/CoffeeRoaster" className="btn">GitHub</a>
            <a href="https://resilient-cranachan-9e61cc.netlify.app/" className="btn btn-primary">Live Demo</a>
          </div>
        </article>

        <article className="port__item">
          <div className="port__item-image">
            <img src={IMG3} alt="3" />
          </div>
          <h3>TIC TAC TOE</h3>
          <div className="port__item-cta">
            <a href="https://github.com/KhushiArora5/Tic-Tac-Toe" className="btn">GitHub</a>
            <a href="https://steady-kashata-47d6ca.netlify.app/" className="btn btn-primary">Live Demo</a>
          </div>
        </article>

        <article className="port__item">
          <div className="port__item-image">
            <img src={IMG4} alt="4" />
          </div>
          <h3>E-COMMERCE SWIFT</h3>
          <div className="port__item-cta">
            <a href="https://github.com/KhushiArora5/e-commerce" className="btn">GitHub</a>
            <a href="https://superb-capybara-6f4ee8.netlify.app/" className="btn btn-primary">Live Demo</a>
          </div>
        </article> */}
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="port__item">
                <div className="port__item-image">
                  <img src={image} alt="1" />
                </div>
                <h3>{title}</h3>
                <div className="port__item-cta">
                  <a href={github} className="btn">GitHub</a>
                  <a href={demo} className="btn btn-primary">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Port;