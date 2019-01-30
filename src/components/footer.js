import React from 'react'

export const scrollToTop = e => {
  let position = window.pageYOffset
  let time = 0
  let percentage

  if (e) {
    e.preventDefault()
  }

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
      requestAnimationFrame(scroll)
    }
  }

  requestAnimationFrame(scroll)
}

const Footer = () => (
  <footer className="site-footer">
    <div className="wrap">
      <div data-grid>
        <div data-col="M1-2">
          <a href="/feed.xml">RSS</a>
          {' '}·{' '}
          <a
            href="https://github.com/RadLikeWhoa/radlikewhoa.github.io"
            target="_blank"
            rel="noreferrer noopener">
            GitHub
          </a>
        </div>
        <div data-col="M1-2">
          <a
            href="#top"
            onClick={scrollToTop}>
            Back to top
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
