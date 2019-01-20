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
      <div data-grid>
        <div data-col="1-2">
          <a href="/feed.xml" data-button="block dark" title="RSS feed for all articles on this site">
            <span data-icon="rss"></span><span className="label opt-label">RSS</span>
          </a>
        </div>
        <div data-col="1-2">
          <a href="https://github.com/RadLikeWhoa/radlikewhoa.github.io" data-button="block dark" title="GitHub repository for this site">
            <span data-icon="github"></span><span className="label opt-label">GitHub</span>
          </a>
        </div>
        <div data-col>
          <a href="#top" id="topLink" data-button="center dark" onClick={scrollToTop}>
            <span className="label">Back to top</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
