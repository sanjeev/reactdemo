import React, { Component } from 'react'
import Header from './common/header/header';
import Footer from './common/footer/footer';
export default class App extends Component {
    render() {
        return (
            <main className="main" id="top">
                <Header />
                {this.props.children}
                <Footer />
            </main>
        )
    }
}
