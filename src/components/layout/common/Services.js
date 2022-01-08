import React, { Component } from 'react'
import Slider from "react-slick";
import logo from "../../../assets/images/sacgd.png";

export default class Services extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        };
        return (
            <>
                <div className='lore-ipm text-center mt-5 mb-5'>
                    <p>Lorem ipsum dolor</p>
                    <h1>Services</h1>
                </div>
                <div className="App mb-5">

                    <div className="slider-wrapper">

                        <Slider {...settings} className='slider'>



                            <div>
                                <img className="slick-slide-image" src={logo} />
                                <div className='text-center mt-2'>
                                    <h5>What is Lorem Ipsum</h5>
                                    <p>It is a long established fact that a reader will be distracted by</p>
                                    <hr />
                                    <a href='#'>Read More</a>
                                </div>
                            </div>
                            <div>
                                <img className="slick-slide-image" src={logo} />
                                <div className='text-center mt-2'>
                                    <h5>What is Lorem Ipsum</h5>
                                    <p>It is a long established fact that a reader will be distracted by</p>
                                    <hr />
                                    <a href='#'>Read More</a>
                                </div>
                            </div>
                            <div>
                                <img className="slick-slide-image" src={logo} />
                                <div className='text-center mt-2'>
                                    <h5>What is Lorem Ipsum</h5>
                                    <p>It is a long established fact that a reader will be distracted by</p>
                                    <hr />
                                    <a href='#'>Read More</a>
                                </div>
                            </div>
                            <div>
                                <img className="slick-slide-image" src={logo} />
                                <div className='text-center mt-2'>
                                    <h5>What is Lorem Ipsum</h5>
                                    <p>It is a long established fact that a reader will be distracted by</p>
                                    <hr />
                                    <a href='#'>Read More</a>
                                </div>
                            </div>
                            <div>
                                <img className="slick-slide-image" src={logo} />
                                <div className='text-center mt-2'>
                                    <h5>What is Lorem Ipsum</h5>
                                    <p>It is a long established fact that a reader will be distracted by</p>
                                    <hr />
                                    <a href='#'>Read More</a>
                                </div>
                            </div>
                            <div>
                                <img className="slick-slide-image" src={logo} />
                                <div className='text-center mt-2'>
                                    <h5>What is Lorem Ipsum</h5>
                                    <p>It is a long established fact that a reader will be distracted by</p>
                                    <hr />
                                    <a href='#'>Read More</a>
                                </div>
                            </div>






                        </Slider>

                    </div>

                </div>
            </>
        )
    }
}
