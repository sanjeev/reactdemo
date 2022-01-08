import React, { Component } from 'react'

import Carousel from 'react-bootstrap/Carousel';
export default class Homeslider extends Component {
    render() {
        
        return (

           
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                            alt="First slide"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                            alt="Second slide"
                        />

                        
                    </Carousel.Item>
                   
                </Carousel>
            </div>


        );
    }
}
