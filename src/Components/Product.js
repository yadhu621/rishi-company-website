import React from 'react'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Modal from 'react-bootstrap/Modal';

import { saveAs } from 'file-saver';


function MyVerticallyCenteredModal(props) {
  const certificate="./images/certificate.png";

  const downloadImage=()=> {
    saveAs(certificate, 'certificate.png')
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <FontAwesomeIcon icon={faDownload} onClick={downloadImage} />
      </Modal.Header>
      <Modal.Body>
        <img src="./images/certificate.png" alt="" />
      </Modal.Body>
    </Modal>
  );
}

export default function Product() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="product--top__bg">
        <Header />
        <section className="product--top">
          <div className="container">
            <div className="product--container">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className='prdoduct--details'>
                    <div className="product__header">
                      <h1>Install Solar projects quicker & better with Surya</h1>
                    </div>
                    <div className="product__subheading mt-5">
                      <h4>Custom made B2B digital platform exclusively catering to utility scale solar industry players</h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-end">
                  <div className="product__img">
                    <img src="./images/product1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="surya">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="surya__logo">
                <img src="./images/suryalogo.png" alt="" height={52} width={135} />
              </div>
              <div className="surya__paragraph">
                <p>Launching in May 2023, members in SURYA working on projects with Nextracker technology can</p>
              </div>

              <div className="surya--animation">
                <div className="surya--box" data-aos="slide-down">
                  <div className="surya--topic">
                    <h3>Visualize</h3>
                  </div>
                  <div className="surya__list d-flex align-items-center mt-4">
                    <div className="success--logo">
                      <img src="./images/Success.png" alt="" height={32} width={32} />
                    </div>
                    <div className="success--paragraph">
                      <p>Record, monitor and track construction progress</p>
                    </div>
                  </div>
                </div>

                <div className="surya--box" data-aos="slide-down">
                  <div className="surya--topic">
                    <h3>Manage</h3>
                  </div>
                  <div className="surya__list d-flex align-items-center mt-4">
                    <div className="success--logo">
                      <img src="./images/Success.png" alt="" height={32} width={32} />
                    </div>
                    <div className="success--paragraph">
                      <p>Add details of site staff, manage and track work hours by activity</p>
                    </div>
                  </div>
                </div>

                <div className="surya--box" data-aos="slide-down">
                  <div className="surya--topic">
                    <h3>Assure</h3>
                  </div>
                  <div className="surya__list d-flex align-items-center mt-4">
                    <div className="success--logo">
                      <img src="./images/Success.png" alt="" height={32} width={32} />
                    </div>
                    <div className="success--paragraph">
                      <p>Conduct quality checks, add to punch lists, track resolution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{overflow: "hidden"}}>
              <div className="surya--img">
                <img src="./images/visualize.png" alt="" />
                <img src="./images/manage.png" alt="" />
                <img src="./images/assure.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='why--surya'>
        <div className="container">
          <div className="surya--header">
            <h2>Why use Surya</h2>
          </div>
          <div className="surya--paragraph mt-4">
            <p>Simple, imagine a software which is custom-built, not just for your industry but for your specific project. That’s what we offer, contact us for a demo</p>
          </div>
        </div>
      </section>

      <section className='member'>
        <div className="container">
          <div className="member--header">
            <h2>Why become a member of Surya</h2>
          </div>
          <div className="row mt-15">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="member-box">
                <div className="member--icon">
                  <img src="./images/data.png" alt="" />
                </div>
                <div className="member--header">
                  <h3>Data Valuation Platform</h3>
                </div>
                <div className="member--paragraph mt-3">
                  <p>Apart from using the services on our platform, Surya will be the first ever data valuation platform operating in a large scale B2B environment.</p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="member-box">
                <div className="member--icon">
                  <img src="./images/benefit.png" alt="" />
                </div>
                <div className="member--header">
                  <h3>Derive Monetary Benefits</h3>
                </div>
                <div className="member--paragraph mt-3">
                  <p>What’s more, companies could also derive direct monetary benefits by sharing their project specific data on our platform.</p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="member-box">
                <div className="member--icon">
                  <img src="./images/reaily.png" alt="" />
                </div>
                <div className="member--header">
                  <h3>Readily Available Data for Use</h3>
                </div>
                <div className="member--paragraph mt-3">
                  <p>Companies working on a project would be able to reap maximum benefits of having non-confidential project specific data readily available for use.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="data">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="data--header">
                <h2>Data security</h2>
              </div>
              <div className="data--paragraph mt-5">
                <p>Your data security is our highest priority. Our company and the platform SURYA are assessed and conform to the requirements of <span onClick={() => setModalShow(true)}>ISO 27001:2013</span> (Information security management system).
                  <br />
                  <br />
                  Yes, we are a startup but data security and compliance is where we spent first. We shunned the idea of building an MVP (Minimum viable product) or rather we interpreted it as Maximum Viable Product to offer you a fully functional & complete service with the necessary security systems in place.
                  <br />
                  <br />
                  That’s not all, we have plans to become SOC 2 compliant in 2023. Rest assured, the product will have the highest data security standards in line and most likely better than industry standards.
                </p>
                <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              </div>
              
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img src="./images/security.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='certificate' id='certificate'>
        <div className="container">
          <div className="certificate--box" onClick={() => setModalShow(true)}>
            <div className="certificate--container">
              <div className="certificate__img">
                <img src="./images/iso.png" alt="" height={119} width={119} />
              </div>
              <div className="certificate__details">
                <h5>Certificate Number</h5>
                <h3>BQSR2042</h3>
              </div>
            </div>
            <div className="certificate__arrow" >
              <img src="./images/arrow.png" alt="" />
            </div>
          </div>
          <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
        </div>
      </section>

      <section className="hero">
        <div className="container">
          <div className="hero__img">
            <img src="./images/heroicon.png" alt="" height={80} width={80} />
          </div>
          <div className="hero__header mt-4">
            <h2>What does <br /> the future look like</h2>
          </div>
          <div className="hero__paragrapgh mt-4">
            <p>This is just the beginning; we intend to connect and service all technologies and all companies, big and small within the utility scale solar industry through Surya. We consider empowering such companies our highest privilege as each of these companies makes the world a better place.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
