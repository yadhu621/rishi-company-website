import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export default function Footer() {
  return (
    <>
    <section className="footer">
        <div className="container">
            <div className="footer--container">
                <div className="footer__logo">
                    <Link to={"/"}><img src="./images/footerlogo.svg" alt="" /></Link>
                </div>
                <div className="footer__menu">
                    <ul>
                        <Link to={"/"}><li>Home</li></Link>
                        <HashLink to={"/#about"} smooth><li>About us</li></HashLink>
                        <HashLink to={"/#our-team"} smooth><li>Team</li></HashLink>
                        <HashLink to={"/#contact-us"} smooth><li>Contact us</li></HashLink>
                        <HashLink to={"/product#certificate"} smooth><li>Certificate</li></HashLink>
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
