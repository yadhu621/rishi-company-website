import React from 'react'

export default function ContactUs() {
  return (
    <>
    <section className="contact" id='contact-us'>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-7 col-lg-7">
                    <div className="contact__header" data-aos="fade-up" data-aos-offset="30" data-aos-delay="0" data-aos-duration="1500" data-aos-easing="ease-in-out">
                        <h2>Contact us</h2>
                    </div>
                    <div className="contact--container" data-aos="zoom-in" data-aos-offset="10" data-aos-delay="20" data-aos-duration="2000" data-aos-easing="ease-in-out">
                        <div className="contact__name">
                            <h3>Rishi Management Consulting</h3>
                        </div>
                        <div className="contact__location">
                            <h5>Sydney, Australia</h5>
                        </div>
                        <div className="contact__mail mt-4">
                            <a href="mailto:projects@rishiconsult.com.au">projects@rishiconsult.com.au</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-5 d-flex align-items-center justify-content-center">
                    <div className="contact__img">
                        <img src="./images/contact.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
