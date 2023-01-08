import React from 'react'

export default function ContactUs() {
  return (
    <>
    <section className="Contact" id='contactUs'>
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="contact__header">
                        <h2>Contact us</h2>
                    </div>
                    <div className="contact--container">
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
                <div className="col-lg-5 d-flex align-items-center justify-content-center">
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
