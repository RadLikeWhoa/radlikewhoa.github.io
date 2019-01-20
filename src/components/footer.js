import PropTypes from 'prop-types'
import React from 'react'

const scrollToTop = e => {
  let position = window.pageYOffset
  let time = 0
  let raf, percentage

  e.preventDefault()

  // The easing function is an easeInOutQuad function.

  const easing = function (time) {
    return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time
  }

  // The distance to scroll for each iteration is calculated using the
  // passed time and the overall distance. Using requestAnimationFrame we
  // can achieve 30fps.

  const scroll = function () {
    if (window.pageYOffset > position) return

    percentage = (time += 60) / 3000

    position -= (position * easing(Math.min(1, percentage)))
    window.scrollTo(0, Math.floor(position))

    if (position > 0) {
      raf = requestAnimationFrame(scroll)
    }
  }

  raf = requestAnimationFrame(scroll)
}

const Footer = () => (
  <footer className="site-footer">
    <div className="wrap">
      Copyright © 2013 – {new Date().getFullYear()}
    </div>
  </footer>
)

export default Footer
