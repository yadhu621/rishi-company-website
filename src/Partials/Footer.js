import React from 'react'

export default function Footer() {
  return (
    <>
    <section className="footer">
        <div className="container">
            <div className="footer--container">
                <div className="footer__logo">
                    <img src="./images/footerlogo.svg" alt="" />
                </div>
                <div className="footer__menu">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Team</li>
                        <li>Contact us</li>
                        <li>Certificate</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="footer__copyright">
                <p>Rishi Management Consulting © {new Date().getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    </section>
    </>
  )
}
