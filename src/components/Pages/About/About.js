import React from 'react'
import './about.css'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

const About = () => {
    return (
        <>
            <main id="main">

                <div className='abo1'>


                    <div className="breadcrumbs d-flex align-items-center abo" >
                        <div className="container position-relative d-flex flex-column align-items-center">

                            <h2 className='white'>About</h2>
      
                            <p className='ye'>Home / <span>About</span></p>

                        </div>
                    </div>
                </div>



                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">

                        <div className="row gy-4" data-aos="fade-up">
                            <div className="col-lg-4">
                                <img src="img/about.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8">
                                <div className="content ps-lg-5">
                                    <h3 className='abouthead'>Voluptatem dignissimos provident quasi</h3>
                                    <p className='para'>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                                    </p>
                                    <ul>
                                        <li><i class="fa fa-arrow-right" aria-hidden="true"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><i className="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>



                <section id="why-us" className="why-us">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2 className='center'>Why Choose Us</h2>
                            <hr />

                        </div>

                        <div className="row g-0" data-aos="fade-up" data-aos-delay="200">

                            <div className="col-xl-5 ab-img">
                                <img src="img/about2.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-xl-7 slides  position-relative">


                                <div className="slides-1 swiper">
                                    <div className="swiper-wrapper">
                                        <div className='black'>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <h1>Let's grow your business together</h1>
                                                    <h3>Optio reiciendis accusantium iusto architecto at quia minima maiores quidem, dolorum.</h3>
                                                    <p>Dolorem quia fuga consectetur voluptatem. Earum consequatur nulla maxime necessitatibus cum
                                                        accusamus. Voluptatem dolorem ut numquam dolorum delectus autem veritatis facilis. Et ea ut
                                                        repellat ea. Facere est dolores fugiat dolor.</p>

                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <h1>Aliquid non alias minus</h1>
                                                    <h3>Tempora quos est ut quia adipisci ut voluptas. Deleniti laborum soluta nihil est.</h3>
                                                    <p>Ut rerum et autem vel. Et rerum molestiae aut sit vel incidunt sit at voluptatem. Saepe
                                                        dolorem et sed voluptate impedit. Ad et qui sint at qui animi animi rerum..</p>

                                                </Carousel.Item>
                                                <Carousel.Item>

                                                    <h1> slide label</h1>
                                                    <h3>Tempora quos est ut quia adipisci ut voluptas. Deleniti laborum soluta nihil est.</h3>
                                                    <p>Dolorem quia fuga consectetur voluptatem. Earum consequatur nulla maxime necessitatibus cum
                                                        accusamus. Voluptatem dolorem ut numquam dolorum delectus autem veritatis facilis. Et ea ut
                                                        repellat ea. Facere est dolores fugiat dolor.</p>  <p>
                                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                                    </p>
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div>

                        </div>

                    </div>
                </section>



                <div className='abo1'>
                    <section id="call-to-action" className="call-to-action about-img">
                        <div className="container" data-aos="fade-up">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <h3 className='ut'>Ut fugiat aliquam aut non</h3>
                                    <p className='duis'>Duis aute irure dolor in reprehenderit in voluptate velit 
                                    esse cillum dolore 
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                                    </p>
                                    <button>Call to Action</button>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>



                <section id="team" className="team">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2 className='our'>Our Team</h2>
                            <hr  className='hrc'/>
                            <br />
                            <br />

                        </div>

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="img/team/team-1.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="/img/team/team-2.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Sarah Jhonson</h4>
                                        <span>Product Manager</span>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="/img/team/team-3.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>William Anderson</h4>
                                        <span>CTO</span>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="img/team/team-4.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}

export default About