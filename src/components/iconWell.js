import React from 'react'
import PropTypes from 'prop-types'

const IconWell = ({ title, path, pattern, background, icon }) => (
  <a
    href={path}
    className="project-link">
    <div
      className="icon-well"
      data-pattern={pattern}
      style={{ backgroundColor: background }}>
      <img
        src={icon}
        alt={`${title} icon`} />
    </div>
  </a>
)

IconWell.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default IconWell
