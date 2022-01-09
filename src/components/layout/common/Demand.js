import React, { Component } from 'react'
import logo from "../../../assets/images/sacgd.png";
export default class Demand extends Component {
    render() {
        return (
            <>
                <div className='mb-5'>
                    <div className='lore-ipm text-center mt-5 mb-5'>
                        <p>Lorem ipsum dolor</p>
                        <h1>Developers On Demand</h1>
                    </div>
                    <div className="container">
                        <div className='row'>
                            <div className='col-md-4 text-center'>
                                <img src={logo} className='case' width={330} height={413} alt=''/>
                            </div>
                            <div className='col-md-4 text-center'>
                                <img src={logo} className='case' width={330} height={413} alt='' />
                            </div>
                            <div className='col-md-4 text-center'>
                                <img src={logo} className='case' width={330} height={413} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}