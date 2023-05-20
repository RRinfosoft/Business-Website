
import React from 'react'

const Contact = () => {
  return (
    <>
    <>
  <main id="main">
    {/* ======= Breadcrumbs ======= */}
    <div
      className="breadcrumbs d-flex align-items-center"
      style={{ backgroundImage: 'url("img/contact-header.jpg")' }}
    >
      <div className="container position-relative d-flex flex-column align-items-center">
        <h2>Contact</h2>
        <ol>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Contact</li>
        </ol>
      </div>
    </div>
    {/* End Breadcrumbs */}
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">
      <div className="container position-relative" data-aos="fade-up">
        <div className="row gy-4 d-flex justify-content-end">
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay={100}>
            <div className="info-item d-flex">
              <i className="bi bi-geo-alt flex-shrink-0" />
              <div>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            {/* End Info Item */}
            <div className="info-item d-flex">
              <i className="bi bi-envelope flex-shrink-0" />
              <div>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
            </div>
            {/* End Info Item */}
            <div className="info-item d-flex">
              <i className="bi bi-phone flex-shrink-0" />
              <div>
                <h4>Call:</h4>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            {/* End Info Item */}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={250}>
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>
    {/* End Contact Section */}
  </main>
  {/* End #main */}
</>

    
    </>
  )
}

export default Contact