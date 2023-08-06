import React from 'react';
import './Port.css';
import IMG1 from '../../Assets/1.jpg';
import IMG2 from '../../Assets/2.jpg';
import IMG3 from '../../Assets/3.jpg';
import IMG4 from '../../Assets/4.jpg';
import IMG5 from '../../Assets/5.jpg';
import IMG6 from '../../Assets/6.jpg';
import IMG7 from '../../Assets/7.jpg';
import IMG8 from '../../Assets/8.jpg';
import IMG9 from '../../Assets/9.jpg';
import IMG10 from '../../Assets/10.jpg';
import IMG11 from '../../Assets/11.jpg';

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
  },
  {
    id: 6,
    image: IMG6,
    title: 'MOON ANIMATION',
    github: 'https://github.com/KhushiArora5/CSS_Art/tree/main/Moon',
    demo: 'https://unique-kitsune-d10f17.netlify.app/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'DAY AND NIGHT ANIMATION',
    github: 'https://github.com/KhushiArora5/CSS_Art/tree/main/Day%20%26%20Night',
    demo: 'https://resplendent-bavarois-6ad7b6.netlify.app/'
  },
  {
    id: 8,
    image: IMG8,
    title: 'CAT',
    github: 'https://github.com/KhushiArora5/CSS_Art/tree/main/Cat',
    demo: 'https://keen-banoffee-eae781.netlify.app/'
  },
  {
    id: 9,
    image: IMG9,
    title: 'ASTRONAUT ANIMATION',
    github: 'https://github.com/KhushiArora5/CSS_Art/tree/main/Astronaut',
    demo: 'https://spectacular-frangollo-0a3baf.netlify.app/'
  },
  {
    id: 10,
    image: IMG10,
    title: 'AMONG US',
    github: 'https://github.com/KhushiArora5/CSS_Art/tree/main/Among_Us',
    demo: 'https://comfy-sable-ed8026.netlify.app/'
  },
  {
    id: 11,
    image: IMG11,
    title:'MOVING CHICK ANIMATION',
    github: 'https://github.com/KhushiArora5/CSS_Art/tree/main/Moving%20Chick',
    demo: 'https://willowy-croissant-1cb755.netlify.app/'
  },
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