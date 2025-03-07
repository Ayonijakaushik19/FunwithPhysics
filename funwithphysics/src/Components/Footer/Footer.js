import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
        
        {/* <footer className="text-center text-lg-start bg-light pt-2">
        <section className="">
            <div className="container text-center text-md-start mt-4">
            
            <div className="row mt-3">
               
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-3">
                
                <h6 className="text-uppercase fw-bold mb-4">
                    <i className=""></i>Fun With Physics
                </h6>
                <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                </p>
                </div>            

               
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                
                <h6 className="text-uppercase fw-bold mb-4">
                    Products
                </h6>
                <p>
                    <a href="#!" className="text-reset">Angular</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Vue</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Laravel</a>
                </p>
                </div>
               

               
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                
                <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                </h6>
                <p>
                    <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Help</a>
                </p>
                </div>
               

               
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                
                <h6 className="text-uppercase fw-bold mb-4">
                    Contact
                </h6>
                </div>
               
            </div>
            
            </div>
        </section>

        <div className="text-center p-4 bg-dark">
            © 2021 | Copyright@
            <a className="text-reset fw-bold" href="/"> Fun With Physics</a>
        </div>
        </footer> */}

        <footer>
            <div className="main-content">
                <div className="left box">
                    <div className="footer-logo">
                        <img src=""/>
                    </div>
                    <h2>Address</h2>
                    <div className="content">
                        <div className="place">
                            <span className="fas fa-map-marker-alt"></span>
                            <span className="text">India</span>
                        </div>
                        <div className="phone">
                            <span className="fas fa-phone"></span>
                            <span className="text">+91 1234567890</span>
                        </div>
                        <div className="email">
                            <a href="mailto:example123@gmail.com"><span className="fas fa-envelope"></span></a>
                            <span className="text">example123@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className="center box">
                    <h2>Connect with Us</h2>
                    <div className="content">
                        <div className="center">
                            <div className="icons">
                                <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                <li><a href="#"><span
                                    className="fab fa-twitter"></span></a></li>
                                <li><a href="#"><span
                                    className="fab fa-instagram"></span></a></li>
                                <li><a href="#"><span
                                    className="fab fa-linkedin-in"></span></a></li>
                                <li><a href="#"><span
                                    className="fab fa-github"></span></a>
                                </li>
                            </div>
                        </div>
                    </div>
                    <h2 className="additional">Additional Links</h2>
                    <div className="content"></div>
                    <div className="center-bottom">
                        <div>
                            <a href="#"><span className="fas fa-user"></span></a>
                            <span className="text">About Us</span>
                        </div>
                        <div className="contact">
                            <a href="#"><span className="fas fa-comments"></span></a>
                            <span className="text">Contact</span>
                        </div>
                        <div>
                            <a href="#"><span className="fas fa-users"></span></a>
                            <span className="text">FAQs</span>
                        </div>
                    </div>
                </div>

                <div className="right box">
                    <h2>Contact us</h2>
                    <div className="content">
                        <form action="#">
                            <div className="name">
                                <div className="text">Name *</div>
                                <input type="text" placeholder="Enter your Name" />
                            </div>
                            <div className="email">
                                <div className="text">Email *</div>
                                <input type="email" placeholder="Enter your Email-id" required/>
                            </div>
                            <div className="msg">
                                <div className="text">Message *</div>
                                <textarea className="msg" rows="2" cols="25" placeholder="Enter your message!" required></textarea>
                            </div>
                            <div className="btn">
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <center>
                <span className="credit"><a
                    href="#">Fun With Physics</a> | </span>
                    <span className="far fa-copyright"></span><span> 2021 All rights reserved.</span>
                </center>
            </div>
        </footer>
        </>
    )
}

export default Footer
