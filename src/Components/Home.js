import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'
import ContactUs from './ContactUs'
import OurTeam from './OurTeam'

export default function Home() {
    return (
        <>
            <Header />

            <section className='home'>
                <div className="container">
                    <div className="home--container">
                        <div className="home__header text-center">
                            <h1>Helping Utility Scale Solar Industry with Tech</h1>
                        </div>
                        <div className="header__subheading mt-3">
                            <h4>Our expertise is development of custom-made digital applications for the industry. </h4>
                        </div>
                        <div className="header__img mt-4">
                            <img src="./images/home1.png" alt="" />
                            <img src="./images/home2.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='about' id='about'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center flex-column">
                            <div className="about__header">
                                <h2>About Rishi</h2>
                            </div>
                            <div className="about__paragraph mt-4">
                                <p>Boutique technology consulting firm with a razor-sharp focus on utility scale solar industry. Our primary goal is to leverage all the latest digital technologies to lower the costs of construction and operation of solar power plants. In other words, we want to do our bit to make the world greener.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="about__img">
                                <img src="./images/about1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="solar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="solar__header">
                                <h3>Install Solar projects quicker and better with Surya</h3>
                            </div>
                            <div className="solar__product--btn mt-3">
                                <Link to={'/product'}><button type='submit'>View products</button></Link>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 position-relative">
                            <div className="solar__img">
                                <img src="./images/solar.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <OurTeam/>

            <ContactUs/>
            <Footer/>
        </>
    )
}
