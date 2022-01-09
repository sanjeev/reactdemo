import React, { Component } from 'react'
import  Navbar from './common/hadermenu'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="top_bar">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="social">
                                    <li><a target="_blank" href="/#" onClick={(e) => e.preventDefault()}><i className="fa fa-facebook text-white"></i></a></li>
                                    <li><a target="_blank" href="/#" onClick={(e) => e.preventDefault()}><i className="fa fa-twitter text-white"></i></a></li>
                                    <li><a target="_blank" href="/#" onClick={(e) => e.preventDefault()}><i className="fa fa-instagram text-white"></i></a></li>
                                </ul>
                            </div>

                            <div className="col-md-6">
                                <ul className="rightc">
                                    <li><i className="fa fa-envelope-o"></i> webenlance@gmail.com  </li>
                                    <li><i className="fa fa-phone"></i> <a href="/#" onClick={(e) => e.preventDefault()}>+91 780000000, +1 1234567890</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Navbar />

            </header>
        )
    }
}
