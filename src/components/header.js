import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import logo from '../images/logo.svg'
import logoLight from '../images/logo-light.svg'

class Header extends React.Component {
  state = {
    open: false
  }

  render() {
    const { alternate, highlightColor } = this.props
    const { open } = this.state

    return (
      <header className={`site-header ${alternate && 'is-alternate'}`}>
        <div className="wrap">
          <h1>
            <Link to="/">
              <img
                className="site-logo"
                src={alternate ? logoLight : logo}
                alt="Logo" />
            </Link>
          </h1>
      		<nav
            className={`site-nav ${open && 'is-open'}`}
            onClick={() => this.setState({ open: false })}>
      			<Link
              to="/"
              getProps={props => ({ className: `site-nav-item ${props.isCurrent ? 'is-active' : ''}` })}>
              <span
                className="label"
                style={{ color: highlightColor }}>
                Home
              </span>
              <span data-icon="home"></span>
            </Link>
      			<Link
              to="/projects"
              getProps={props => ({ className: `site-nav-item ${props.isCurrent || props.isPartiallyCurrent ? 'is-active' : ''}` })}>
              <span
                className="label"
                style={{ color: highlightColor }}>
                Projects
              </span>
              <span data-icon="case"></span>
            </Link>
      			<Link
              to="/articles"
              getProps={props => ({ className: `site-nav-item ${props.isCurrent || props.isPartiallyCurrent ? 'is-active' : ''}` })}>
              <span
                className="label"
                style={{ color: highlightColor }}>
                Articles
              </span>
              <span data-icon="archive"></span>
            </Link>
      			<Link
              to="/about"
              getProps={props => ({ className: `site-nav-item ${props.isCurrent || props.isPartiallyCurrent ? 'is-active' : ''}` })}>
              <span
                className="label"
                style={{ color: highlightColor }}>
                About
              </span>
              <span data-icon="person"></span>
            </Link>
      			<div className="active-nav-item"></div>
      		</nav>
          <button
            className="nav-toggle"
            onClick={() => this.setState({ open: true })}>
            <span data-icon="list"></span>
          </button>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  alternate: PropTypes.bool,
  highlightColor: PropTypes.string
}

Header.defaultProps = {
  alternate: false,
  highlightColor: '#fff'
}

export default Header
