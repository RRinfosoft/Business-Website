import React from 'react'

const Team = () => {
  return (
    <>
    <>
  <main id="main">
    {/* ======= Breadcrumbs ======= */}
    <div
      className="breadcrumbs d-flex align-items-center"
      style={{ backgroundImage: 'url("img/team-header.jpg")' }}
    >
      <div className="container position-relative d-flex flex-column align-items-center">
        <h2>Team</h2>
        <ol>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Team</li>
        </ol>
      </div>
    </div>
    {/* End Breadcrumbs */}
    {/* ======= Team Section ======= */}
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Team</h2>
        </div>
        <div className="row gy-4">
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="team-member">
              <div className="member-img">
                <img
                  src="img/team/team-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>
          {/* End Team Member */}
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="team-member">
              <div className="member-img">
                <img
                  src="img/team/team-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>
          {/* End Team Member */}
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="team-member">
              <div className="member-img">
                <img
                  src="img/team/team-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>
          {/* End Team Member */}
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="team-member">
              <div className="member-img">
                <img
                  src="img/team/team-4.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>
          {/* End Team Member */}
        </div>
      </div>
    </section>
    {/* End Team Section */}
  </main>
  {/* End #main */}
</>

    
    </>
  )
}

export default Team