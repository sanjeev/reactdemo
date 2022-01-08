import React, { Component } from 'react'
import Slider from 'react-slick';
import logo from "../../../assets/images/sacgd.png";
export default class Products extends Component {
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
                <div className='lore-ipm text-center mt-4 mb-5'>
                    <p>Lorem ipsum dolor</p>
                    <h1>Products</h1>
                </div>
                <Slider {...settings} className='slider'>
                    <img src={logo} width={330} height={413} />
                    <img src={logo} width={330} height={413} />
                    <img src={logo} width={330} height={413} />
                    <img src={logo} width={330} height={413} />
                    <img src={logo} width={330} height={413} />
                </Slider>
            </>
        )
    }
}
