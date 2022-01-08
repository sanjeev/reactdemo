import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import Slider from '../common/Homeslider'
import Products from '../common/Products'
import Portfolio from '../common/Portfolio'
import Demand from '../common/Demand'
import Services from '../common/Services'

export default class Fashion extends Component {

    render() {

        return (
            <div>
                <Helmet>
                    <title>abc | a to z</title>
                    <meta name="description" content="the is " />
                </Helmet>
                <Slider />
                <Products />
                <Services />
                <Portfolio />
                <Demand />

            </div>
        )
    }
}
