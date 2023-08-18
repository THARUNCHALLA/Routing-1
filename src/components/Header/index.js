import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="HeaderContainer">
        <div className="waveContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
            alt="wave"
            className="waveLogo"
          />
          <h1 className="heading">Wave</h1>
        </div>
        <ul>
          <li className="heading1">
            <Link to="/">Home</Link>
          </li>
          <li className="heading1">
            <Link to="/about">About</Link>
          </li>
          <li className="heading1">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
