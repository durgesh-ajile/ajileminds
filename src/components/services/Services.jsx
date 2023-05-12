import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import {motion} from 'framer-motion';
const Services = () => {
    return (
        <section id="services">
            <h5>What We Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <motion.article 
                whileHover={{ scale: 1.15 }}
                className="service">
                    <div className="service__head">
                        <h3>Web Developement</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Visually appealing, polished, and professional</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Intuitive to use</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Optimized for mobile devices and search engines</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>With easily accessible contact information</p>
                        </li>
                        {/* <li>
                            <BiCheck className="service__list-icon" />
                            <p>Matching the current trends</p>
                        </li> */}
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Regularly checked for any broken links or not working scripts</p>
                        </li>
                    </ul>

                </motion.article>
                <motion.article 
                whileHover={{ scale: 1.15 }}
                className="service">
                    <div className="service__head">
                        <h3>Blockchain</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Metaverse</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Blockchain for social impact</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Financial services infrastructure</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Decentralized digital identity</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Blockchain for supply chain</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Increased efficiency and speed.</p>
                        </li>

                    </ul>
                </motion.article>
                <motion.article
                whileHover={{ scale: 1.15 }}
                className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Custom Web Design & Development</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Corporate Branding & Graphics Design</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Wireframing</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Mobile App Design</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Wearables App Design</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Product Design</p>
                        </li>

                    </ul>
                </motion.article>
            </div>
        </section>
    )
}

export default Services