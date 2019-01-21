import React from 'react'
import PropTypes from 'prop-types'

const FilterButton = ({ label, type, onClickFilter, isActive }) => {
  return (
    <button
      className={`tag filter-${type} ${isActive && 'is-active'}`}
      onClick={onClickFilter}>
      <span className="label">{label}</span>
    </button>
  )
}

FilterButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClickFilter: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default FilterButton
