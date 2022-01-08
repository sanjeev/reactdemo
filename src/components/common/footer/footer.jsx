import React, { Component } from 'react';

import logo from "../../../assets/images/logo0.png";
export default class Footer extends Component {
    render() {
        return (
            <>
                <footer id="footer" >
                    <div className="footer-newsletter">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4>Let's Discuss</h4>
                                    <p style={{ color:'#fff',lineHeight: 2.3}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. </p>
                                </div>
                                <div className="col-lg-6">
                                    <form action method="post">
                                        <input type="email" name="email" /><input type="submit" value="Sign up" defaultValue="Subscribe" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 footer-contact">
                                <img src={logo} alt="react-bootstrap" height="30"></img>
                                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit</p>
                                    
                                </div>
                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                                        
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h4>Our Services</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
                                       
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-md-6 footer-links">
                                    <h4>Contact Us</h4>
                                    <div className="social-links mt-3">
                                    <p>
                                        <strong>Phone:</strong> +1 5589 55488 55<br />
                                        <strong>Email:</strong> info@example.com<br />
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container footer-bottom clearfix">
                        <div className="copyright">
                            © Copyright <strong><span>Sanjeev</span></strong>. All Rights Reserved
                        </div>
                        
                    </div>
                </footer>
            </>
        )
    }
}
