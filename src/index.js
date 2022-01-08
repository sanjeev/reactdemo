import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import './assets/css/theme.min.css';
import Fashion from './components/layout/fashion/main';
import NotFound from './components/pages/notfound';
import Layout from './components/app'

class Root extends Component {
  render() {
    return (

      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Fashion />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));