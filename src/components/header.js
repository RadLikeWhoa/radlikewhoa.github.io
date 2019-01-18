import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import logo from '../images/logo.svg'

const Header = ({ siteTitle, className }) => (
  <header className={`site-header ${className}`}>
    <h1>
      <Link to="/"><img className="site-logo" src={logo} alt="Logo" /></Link>
    </h1>
		<nav className="site-nav">
			<button className="menu-toggle"></button>
			<Link activeClassName="is-active" to="/" className="site-nav-item"><span className="label">Home</span> <span data-icon="home"></span></Link>
			<Link activeClassName="is-active" to="/projects" className="site-nav-item"><span className="label">Projects</span> <span data-icon="case"></span></Link>
			<Link activeClassName="is-active" to="/articles" className="site-nav-item"><span className="label">Articles</span> <span data-icon="archive"></span></Link>
			<Link activeClassName="is-active" to="/about" className="site-nav-item"><span className="label">About</span> <span data-icon="person"></span></Link>
			<div className="active-nav-item"></div>
		</nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  className: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  className: ``
}

export default Header
