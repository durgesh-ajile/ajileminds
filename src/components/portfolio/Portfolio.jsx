import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/port1.png'
import IMG2 from '../../assests/port2.png'
import IMG3 from '../../assests/port3.png'
import IMG4 from '../../assests/port4.png'
import IMG5 from '../../assests/port5.png'
import IMG6 from '../../assests/port6.png'
import { motion } from 'framer-motion'


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>Our Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container" id='port-id'>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <motion.img
                            whileHover={{ scale: 1.2 }}
                            src={IMG1} alt=""
                            className='portfolio__images'
                        />
                    </div>
                    <h3>Project-1</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://www.overworldlife.com/" target='__blank' className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <motion.img
                            whileHover={{ scale: 1.2 }}
                            src={IMG2} alt=""
                            className='portfolio__images' />
                    </div>
                    <h3>Project-2</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://insomniacs.in/" target='__blank' className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <motion.img
                            whileHover={{ scale: 1.2 }}
                            src={IMG3} alt=""
                            className='portfolio__images' />
                    </div>
                    <h3>Project-3</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://khadiessentials.com/" target='__blank' className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <motion.img
                            whileHover={{ scale: 1.2 }}
                            src={IMG4} alt=""
                            className='portfolio__images' />
                    </div>
                    <h3>Project-4</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://www.stylerunner.com/au/" target='__blank' className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <motion.img
                            whileHover={{ scale: 1.2 }}
                            src={IMG5} alt=""
                            className='portfolio__images' />
                    </div>
                    <h3>Project-5</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://pockyt.io/" target='__blank' className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <motion.img
                            whileHover={{ scale: 1.2 }}
                            src={IMG6} alt=""
                            className='portfolio__images' />
                    </div>
                    <h3>Project-6</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://www2.periscopeiq.com/" target='__blank' className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio