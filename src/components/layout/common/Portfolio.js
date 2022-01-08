import React, { Component } from 'react'
import logo from "../../../assets/images/sacgd.png";
export default class Portfolio extends Component {
    render() {
        return (
            <>
                <div className='lore-ipm text-center mt-5 mb-5'>
                    <p>Lorem ipsum dolor</p>
                    <h1>Portfolio/ Case Studies</h1>
                </div>
                <div className="container">
                    <div className='row'>
                        <div className='col-md-4 text-center' >
                            <img src={logo} className='case' width={330} height={413} />
                        </div>
                        <div className='col-md-4 text-center'>
                            <img src={logo} className='case' width={330} height={413} />
                        </div>
                        <div className='col-md-4 text-center'>
                            <img src={logo} className='case' width={330} height={413} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
